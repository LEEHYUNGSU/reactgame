import { useRef, useState, useEffect } from 'react';
import OpenSound from '../../sounds/opensound.mp3';
import HeroSound from '../../sounds/Hero.mp3';
import MapleOpening from '../../sounds/maple.mp3';
import GersangSound from '../../sounds/gersang_theme.mp3';
import village2 from '../../sounds/Village 2.mp3';
import field1S from '../../sounds/Field 1.mp3';
import field2S from '../../sounds/Field 2.mp3';
import field3S from '../../sounds/Field 3.mp3';
import field4S from '../../sounds/Field 4.mp3';
import Town1 from '../../sounds/Town 1.mp3';
import Town2 from '../../sounds/Town 2.mp3';
import Town3 from '../../sounds/Town 3.mp3';



function Sound({ startPage, isPlaying, setIsPlaying, mapPage, selectedMap }) {

  const soundSources = [
    OpenSound, HeroSound, MapleOpening, GersangSound, village2, field1S, field2S, field3S, field4S, Town1, Town2, Town3 
  ];
 
  const [soundSource, setSoundSource] = useState(MapleOpening);
  const audioRef = useRef();

  // 재생 버튼 클릭 이벤트 핸들러
  const handlePlay = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // 일시 정지 버튼 클릭 이벤트 핸들러
  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    // `soundSource` 값이 변경될 때마다 `audioRef`의 `src`를 업데이트
    audioRef.current.src = soundSource;

    // 자동으로 재생 (isPlaying 값이 true인 경우에만 자동으로 재생)
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [soundSource, isPlaying]);

  useEffect(() => {
    // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리
    return () => {
      audioRef.current.removeEventListener('canplay', handlePlay);
    };
  }, []);

  useEffect(() => {
    // `canplay` 이벤트를 사용하여 로딩 상태 확인 후 자동으로 재생
    const handleCanPlay = () => {
      if (isPlaying) {
        audioRef.current.play();
      }
    };

    audioRef.current.addEventListener('canplay', handleCanPlay);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리
    return () => {
      audioRef.current.removeEventListener('canplay', handleCanPlay);
    };
  }, [isPlaying, mapPage, selectedMap]);



  // startPage 값이 변경되면 사운드 파일 경로를 업데이트
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * soundSources.length);
    setSoundSource(startPage ? MapleOpening : soundSources[randomIndex]);
  }, [startPage, mapPage, selectedMap]);

  return (
    <div className='sound__container' style={{display: isPlaying? 'none' : 'block'}} >
      {/* `audio` 요소를 추가하고 MP3 파일 경로를 할당합니다. */}
      <audio ref={audioRef} src={soundSource} loop  />

      {/* 재생/일시 정지 버튼 */}
      {isPlaying ? (
        <button onClick={handlePause}>일시 정지</button>
      ) : (
        <button onClick={handlePlay}>재생</button>
      )}
    </div>
  );
}

export default Sound;

