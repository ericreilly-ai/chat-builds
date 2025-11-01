variable "project_name" {
  description = "Name of the project for tagging resources"
  type        = string
  default     = "personal-website"
}

variable "region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

variable "desired_capacity" {
  description = "Number of worker nodes in EKS cluster"
  type        = number
  default     = 2
}
