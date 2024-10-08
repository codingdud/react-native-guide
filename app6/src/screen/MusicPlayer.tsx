import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TrackPlayer, { Event,Track,useTrackPlayerEvents } from 'react-native-track-player'

import { playListData } from '../constants'
import SongInfo from '../components/SongInfo'
import SongSlider from '../components/SongSlider'
import Controlcenter from '../components/Controlcenter'

const {width}=Dimensions.get('window')




const MusicPlayer = () => {
    const [track,setTrack]=React.useState<Track|null|undefined>(null)
    useTrackPlayerEvents([Event.PlaybackTrackChanged],async(event)=>{
        switch (event.type) {
            case Event.PlaybackTrackChanged:
                const playingTrack=await TrackPlayer.getTrack(event.nextTrack)
                setTrack(playingTrack)
                break;
        
            default:
                break;
        }
    })

    const renderArtWork=()=>{
        return (
        <View style={styles.listArtWrapper}>
            <View style={styles.albumContainer}>
                <Image 
                source={{uri:track?.artwork?.toString()||'https://ibb.co/kQwNmSJ'}}
                style={styles.albumArtImg}
                />
            </View>
        </View>
        )
    }
  return (
    <View style={styles.container}>
        <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={song=>song.id.toString()}
        />
        <SongInfo track={track}/>
        <SongSlider/>
        <Controlcenter/>
    </View>
  )
}

export default MusicPlayer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001d23',
      },
      listArtWrapper: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
      },
      albumContainer: {
        width: 300,
        height: 300,
      },
      albumArtImg: {
        height: '100%',
        borderRadius: 4,
      },
})