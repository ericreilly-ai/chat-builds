# Deploy Terraform to AWS

Follow these steps to deploy the infrastructure using Terraform. You need AWS credentials configured (for example in ~/.aws/credentials or via environment variables) for the target account.

1. Open a terminal and change into the `infra` directory in the root of this repository.
2. Initialize Terraform to download required providers and modules using the command:

   terraform init

3. Review the planned changes. This will show you what resources will be created or modified using the command:

   terraform plan -out=tfplan

4. Apply the plan to provision the infrastructure using the command:

   terraform apply tfplan

   Confirm when prompted. This will create the VPC, subnets, and EKS cluster defined in `main.tf`.

5. (Optional) When you no longer need the infrastructure, destroy it to avoid ongoing charges using the command:

   terraform destroy

Ensure that your AWS credentials have permissions to create and manage VPCs, subnets, EKS clusters, security groups, and associated IAM roles.
