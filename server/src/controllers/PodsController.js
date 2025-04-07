import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { podsService } from "../services/PodsService.js";

export class PodsController extends BaseController {
  constructor() {
    super('api/pods')
    this.router
      .get('', this.getAllPods)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPod)
  }
  async getAllPods(request, response, next) {
    try {
      const pods = await podsService.getAllPods()
      response.send(pods)
    } catch (error) {
      next(error)
    }
  }
  async createPod(request, response, next) {
    try {
      const podData = request.body
      podData.creatorId = request.userInfo.id
      const pod = await podsService.createPod(podData)
      response.send(pod)
    } catch (error) {
      next(error)
    }
  }
}