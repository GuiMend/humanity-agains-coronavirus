resource "random_string" "origin_id" {
  length  = 16
  special = false
}

resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = random_string.origin_id.result
}

resource "aws_cloudfront_distribution" "with_custom_certificate" {
  # Boolean to create with custom certificate
  count = var.custom_certificate ? 1 : 0

  # Wait deploy
  wait_for_deployment = false

  # Default Origin
  origin {
    domain_name = var.bucket.bucket_regional_domain_name
    origin_id   = random_string.origin_id.result

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path
    }
  }
  # Default Cache
  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true
    target_origin_id       = random_string.origin_id.result
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  # Distribution Settings
  price_class         = "PriceClass_All"
  aliases             = var.cdn_domain
  enabled             = true
  default_root_object = "index.html"

  viewer_certificate {
    acm_certificate_arn      = var.certificate_arn
    minimum_protocol_version = "TLSv1.1_2016"
    ssl_support_method       = "sni-only"
  }

  # Custom error
  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
  }

  # Restrictions
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # Tags
  tags = {
    Name = "${var.project}: ${terraform.workspace}"
  }
}

resource "aws_cloudfront_distribution" "with_default_certificate" {
  # Boolean to create with default certificate
  count = var.custom_certificate ? 0 : 1

  # Wait deploy
  wait_for_deployment = false

  # Default Origin
  origin {
    domain_name = var.bucket.bucket_regional_domain_name
    origin_id   = random_string.origin_id.result

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path
    }
  }
  # Default Cache
  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true
    target_origin_id       = random_string.origin_id.result
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  # Distribution Settings
  price_class         = "PriceClass_All"
  enabled             = true
  default_root_object = "index.html"

  viewer_certificate {
    cloudfront_default_certificate = true
    minimum_protocol_version       = "TLSv1"
  }

  # Custom error
  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
  }

  # Restrictions
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # Tags
  tags = {
    Name = "${var.project}: ${terraform.workspace}"
  }
}

# Update bucket policy
data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${var.bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = ["${aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn}"]
    }
  }
}

resource "aws_s3_bucket_policy" "origin_bucket" {
  bucket = var.bucket.id
  policy = data.aws_iam_policy_document.s3_policy.json
}
