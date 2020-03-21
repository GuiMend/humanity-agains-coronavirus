resource "aws_s3_bucket" "this" {
  bucket = var.bucket_name
  acl    = "private"
  region = var.region

  tags = {
    Name = "${var.project}: ${terraform.workspace}"
  }
}
