/**
 * Made by AFterNode H3xadecimal
 * Made with AutoJs Pro
 * Voice from: 孙笑川
 */

"ui";

ui.layoutFile("./pages/main.xml")

// 原生语音第一列
VOX_SXC_SZO = "./res/VOX_SXC_SZO.mp3"
ui.VOX_SXC_SZO.click(function(){
    media.playMusic(VOX_SXC_SZO)
})

// 其它
ui.STOP_ALL.click(function(){
    media.stopMusic()
})
