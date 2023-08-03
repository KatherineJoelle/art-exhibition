import resources from "./resources";
import * as utils from '@dcl/ecs-scene-utils';

export function createSkybox() {


//Base sphere
const skybox = new Entity();
skybox.addComponent(new Transform({
    position: new Vector3(16, -10, 16),
    scale: new Vector3(1.2, .9, 1.2),
    rotation: Quaternion.Euler(0, 0, 0)
}))
skybox.addComponent(resources.models.skybox.skyboxShape)
engine.addEntity(skybox)
//skybox.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, -1, 0)))


}