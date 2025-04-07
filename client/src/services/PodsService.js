import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Pod } from "@/models/Pod.js"

class PodsService {
  async getPods() {
    const response = await api.get('api/pods')
    AppState.pods = response.data.map(pojo => new Pod(pojo))
  }
}

export const podsService = new PodsService()