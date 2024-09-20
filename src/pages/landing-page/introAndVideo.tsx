import ReactPlayer from 'react-player/lazy'


export function IntroAndVideo(){
  return (
    <div className='space-y-6'>
      <h1 className="text-[28px] leading-[33px] font-bold text-terciary pt-3 text-center">Headline da Campanha</h1>
      <p className="text-sm text-primary mx-auto text-justify px-11 leading-4">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
      </p>
      <div className='flex text-center justify-center px-4'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
          controls
        />
      </div>
    </div>
  )
}