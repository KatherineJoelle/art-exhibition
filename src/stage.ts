import * as utils from '@dcl/ecs-scene-utils';



export function createStage() {
 

const parentTransform = new Transform({
    position: new Vector3(16, 70, 16),
    rotation: Quaternion.Euler(0, 0, 0)
  })
  
  
  const luz1 = new Entity()
  luz1.addComponent(parentTransform)
  luz1.addComponent(new GLTFShape('models/luz1.glb'))
  engine.addEntity(luz1)
  const luz1Animator = new Animator()
  const luz1Clip = new AnimationState("luz1")
  luz1Animator.addClip(luz1Clip)
  luz1.addComponent(luz1Animator)
  luz1Clip.play()
  
  
  
  const luz2 = new Entity()
  luz2.addComponent(parentTransform)
  luz2.addComponent(new GLTFShape('models/luz2.glb'))
  engine.addEntity(luz2)
  const luz2Animator = new Animator()
  const luz2Clip = new AnimationState("luz2")
  luz2Animator.addClip(luz2Clip)
  luz2.addComponent(luz2Animator)
  luz2Clip.play()
  
  
  
  const luz3 = new Entity()
  luz3.addComponent(parentTransform)
  luz3.addComponent(new GLTFShape('models/luz3.glb'))
  engine.addEntity(luz3)
  const luz3Animator = new Animator()
  const luz3Clip = new AnimationState("luz3")
  luz3Animator.addClip(luz3Clip)
  luz3.addComponent(luz3Animator)
  //luz3Clip.play()
  
  
  const luz4 = new Entity()
  luz4.addComponent(parentTransform)
  luz4.addComponent(new GLTFShape('models/luz4.glb'))
  engine.addEntity(luz4)
  const luz4Animator = new Animator()
  const luz4Clip = new AnimationState("luz4")
  luz4Animator.addClip(luz4Clip)
  luz4.addComponent(luz4Animator)
  luz4Clip.play()
  
  
  const luz6 = new Entity()
  luz6.addComponent(parentTransform)
  luz6.addComponent(new GLTFShape('models/luz6.glb'))
  engine.addEntity(luz6)
  const luz6Animator = new Animator()
  const luz6Clip = new AnimationState("luz6")
  luz6Animator.addClip(luz6Clip)
  luz6.addComponent(luz6Animator)
  luz6Clip.play()
  
  
  // Platforms

  const ramp1 = new Entity()
  ramp1.addComponent(new Transform({
    position: new Vector3(16, -52, 16),
    scale: new Vector3(1, 1, 1)
  }))
  ramp1.addComponent(new GLTFShape("models/rampas.glb"))
  engine.addEntity(ramp1)

  
  
  
  
  // Stage 
  const Stage = new Entity()
  Stage.addComponent(new GLTFShape("models/stage.glb"))
  Stage.addComponent(new Transform({
    position: new Vector3(16, 70, 16),
    rotation: Quaternion.Euler(0, 0, 0)
  }))
  engine.addEntity(Stage)
  
  
  
  // screen model
  
  const screenModel = new Entity()
  screenModel.addComponent(
    new Transform({
      position: new Vector3(15.2, 75.4, 19),
      rotation: Quaternion.Euler(0, 180, 0),
      scale: new Vector3(1, 1, 1)
    })
  )
  screenModel.addComponent(new GLTFShape("models/screen.glb"))
  engine.addEntity(screenModel)
  
  
  
  // screen 
  
  const myVideoClip = new VideoClip(
    'your link here'
  )
  
  // #2
  const myVideoTexture = new VideoTexture(myVideoClip)
  
  // #3
  const myMaterial = new Material()
  myMaterial.albedoTexture = myVideoTexture
  myMaterial.emissiveTexture = myVideoTexture
  myMaterial.emissiveColor = Color3.White()
  myMaterial.emissiveIntensity = 1
  myMaterial.roughness = 1
  myMaterial.specularIntensity = 0
  myMaterial.metallic = 0
  
  
  // #4
  const screen = new Entity()
  screen.addComponent(new PlaneShape())
  screen.addComponent(
    new Transform({
      position: new Vector3(15.1, 75.4, 18.9),
      rotation: Quaternion.Euler(0, 180, 0),
      scale: new Vector3(1920/360, 1080/320, 1)
    })
  )
  screen.addComponent(myMaterial)
  screen.addComponent(
    new OnPointerDown(() => {
      myVideoTexture.playing = !myVideoTexture.playing
    },{
      hoverText: "Play / Pause",
      distance: 5
    })
  )
  engine.addEntity(screen)
  
  
  
  
  
  // Music will play automatically when a player enters the scene
  // To change this change myVideoTexture.play() to //myVideoTexture.play()
  
  screen.addComponent(
    new utils.Delay(10000, () => {
  
    myVideoTexture.play(),
    screen.removeComponent(utils.Delay)
  
    })
  )



}