terraform {
  backend "s3" {
    bucket  = "humanity-against-coronavirus-terraform"
    key     = "terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}

provider "aws" {
  version = "~>2.20"
  region  = "us-east-1"
}

locals {
  project            = "Humanity against Coronavirus Frontend"
  region             = "us-east-1"
  s3_bucket          = "humanity-against-coronavirus-${terraform.workspace}"
  custom_certificate = true
  certificate_arn    = "arn:aws:acm:us-east-1:926311740234:certificate/9edfb9b4-21ac-4776-9214-3d6a3b98d347"

  staging_config = {
    cdn_domain = ["staging.humanity-against-coronavirus.com"]
  }

  prod_config = {
    cdn_domain = ["humanity-against-coronavirus.com"]
  }

  configs = {
    "staging" : local.staging_config,
    "prod" : local.prod_config,
  }

  config = lookup(local.configs, terraform.workspace, "staging")
}

module "s3" {
  source      = "./s3"
  bucket_name = local.s3_bucket
  region      = local.region
  project     = local.project
}

module "cloudfront" {
  source             = "./cloudfront"
  project            = local.project
  bucket             = module.s3.bucket
  cdn_domain         = local.config.cdn_domain
  custom_certificate = local.custom_certificate
  certificate_arn    = local.certificate_arn
}







