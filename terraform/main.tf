resource "aws_instance" "test-server" {
  ami                    = "ami-04b4f1a9cf54c11d0"
  instance_type          = "t2.micro"
  vpc_security_group_ids = [data.aws_security_group.existing_group.id]
  key_name               = "test-key"
  tags = {
    Name = "todo-test-server"
  }
}