import { dbContext } from "../db/DbContext.js"
import { accountService } from "./AccountService.js"

class PodsService {
  async getAllPods() {
    let pods = await dbContext.Pods.find().populate('creator')
    if (pods.length == 0) {
      pods = await this.#createDummyPods()
    }
    return pods
  }
  async createPod(podData) {
    const pod = await dbContext.Pods.create(podData)
    await pod.populate('creator')
    return pod
  }
  async #createDummyPods() {
    const accounts = await accountService.createDummyAccounts()
    const dummies = [
      {
        name: 'Migration Squad',
        tags: ['ocean', 'chill', 'squad'],
        coverImg: 'https://images.unsplash.com/photo-1518399681705-1c1a55e5e883?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hhbGVzfGVufDB8fDB8fHwy',
        creatorId: accounts[0].id.toString()
      },
      {
        name: 'Crustacean Nation',
        tags: ['shells', 'bubbles', 'garbage is food'],
        coverImg: 'https://images.unsplash.com/photo-1711612901199-ffad39e8aa13?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNocmltcHxlbnwwfHwwfHx8Mg%3D%3D',
        creatorId: accounts[1].id.toString()
      },
    ]
    const pods = await dbContext.Pods.create(dummies)
    pods.forEach(async (pod) => await pod.populate('creator'))
    return pods
  }
}

export const podsService = new PodsService()