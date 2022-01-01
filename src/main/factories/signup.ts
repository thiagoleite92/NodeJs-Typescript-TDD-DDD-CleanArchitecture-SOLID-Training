import { SignUpController } from '../../presentation/controllers/signup/signup'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapater'
import { DbAddAccount } from '../../data/usecases/addaccount/db-add-account'
import { BcrypterAdapter } from '../../infra/criptography/bcrypt-adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'

export const makeSignUpController = (): SignUpController => {
  const salt = 12
  const emailValidator = new EmailValidatorAdapter()
  const bcryptAdapter = new BcrypterAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)
  return new SignUpController(emailValidator, dbAddAccount)
}
