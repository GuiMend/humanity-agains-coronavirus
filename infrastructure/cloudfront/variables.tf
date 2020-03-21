variable "project" {
  description = "Project name"
  type        = string
}

variable "bucket" {
  description = "Origin S3 Bucket"
  type = object({
    bucket_regional_domain_name = string,
    arn                         = string,
    id                          = string,
  })
}

variable "cdn_domain" {
  description = "CDN custom domain"
  type        = list(string)
}

variable "custom_certificate" {
  description = "Boolean to define if a custom certificate will be used"
  type        = bool
}

variable "certificate_arn" {
  description = "Certificate ARN"
  type        = string
}
