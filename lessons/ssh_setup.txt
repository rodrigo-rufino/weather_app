shh-keygen -t rsa -b 4096 -C "rodrigo.srs.br@gmail.com"
ls -la ~/.ssh
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_rsa