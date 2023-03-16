import { Unity, useUnityContext } from 'react-unity-webgl';


type Props = {
  unityProvider: any
}

export const Game: React.FC<Props> = ({ unityProvider }) => {

  return (
    <Unity
      unityProvider={unityProvider}
      style={{ width: "100%", height: "100%" }}

    />
  )
}

