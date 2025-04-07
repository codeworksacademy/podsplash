import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { PodSchema } from '../models/Pod.js';

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Pods = mongoose.model('Pod', PodSchema);
}

export const dbContext = new DbContext()
