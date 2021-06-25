# NLW Valoriza

## Entidades

- User
- Tag
- User

### Relacionamentos

- OneToMany - User -> Compliment (userReceiver)
- OneToMany - User -> Compliment (userSender)
- OneToMany - Tag -> Compliment (Tag)
- ManyToOne - Compliment -> User (userReceiver)
- ManyToOne - Compliment -> User (userSender)
- ManyToOne - Compliment -> Tag (Tag)

### Regras

- Cadastro de usuário

  [x] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

  [x] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

  [x] Não é permitido cadastrar mais de uma tag com o mesmo nome

  [x] Não é permitido cadastrar tag sem nome

  [x] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios

  [x] Não é permitido um usuário cadastrar um elogio para si

  [x] Não é permitido cadastrar elogios para usuários inválidos

  [x] O usuário precisa estar authenticado na aplicação
