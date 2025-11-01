variable "project_name" {
  description = "Project name used for resources"
  type        = string
  default     = "personal-website"
}

variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "desired_capacity" {
  description = "Desired node group size"
  type        = number
  default     = 2
}
