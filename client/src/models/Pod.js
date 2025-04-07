import { Profile } from "./Account.js"

export class Pod {
  /**
   * @param {{ id: string; name: string; tags: string[]; coverImg: string; creatorId: string; createdAt: string | number | Date; updatedAt: string | number | Date; creator: { id: string; name: string; picture: string; }; }} data
   */
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.tags = data.tags
    this.coverImg = data.coverImg
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = new Profile(data.creator)
  }
}