//authEndpointは、Spotifyを使用して認証する必要があるURL すべてのSpotify認証リクエストはこのURLを介して渡される必要がある
export const authEndPoint = 'https://accounts.spotify.com/authorize'
//redirectUriは、Spotify Web API設定で指定したものであり、Spotifyログインが成功した場合にユーザーを取り戻す場所を示す
const redirectUrl = 'http://localhost:3000/'
//clientIdは、Spotify Web APIによって提供されるクライアントID
const clientId = process.env.SPOTIFY_CLIENT_ID

//スコープは基本的に、Spotifyに要求する必要のある権限
//権限は、SpotifyAPIドキュメントで入手
const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'use-top-read',
  'user-modify-playback-state',
]

//この関数はアクセストークンを取得すると、URLからアクセストークンを取得する。次に
export const getTokenFromUrl = () => {
  return (
    //URLの＃以降の部分を取得
    location.hash
      //substring(1)とすることで2文字目以降［?以外］を取得
      .substring(1)
      //&が含まれている場合、&で分割する
      .split('&')
      //出力値を生成
      .reduce((initial, item) => {
        //=が含まれている場合=で分割
        let parts = item.split('=')
        //URIをデコード（暗号化されたデータを文字コードなどのデータに戻す）
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
      }, {})
  )
}

//loginUrlはsユーザーを承認するために呼び出す必要のある最後のURL。このURLにはSpotifyがこのアプリを認識し、ユーザ認証を許可するためにクライアントIDと全ての権限が含まれる
export const loginUrl = `&{authEndPoint}?client_id=${clientId}&redirect_url=${redirectUrl}&scope=${scopes.join(
  '%20',
)}&response_type=token&show_dialog=true`
