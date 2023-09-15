import React,{useEffect,useState} from 'react'

function BackToTop() {

    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect( ()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY >200){
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    },[])

    const handleScroll = ()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }

  return (
    <>
     {backToTopButton && (
        <button style={{
            position:'fixed',
            bottom:'40px',
            right:'40px',
            height:'40px',
            fontSize:'1.25rem',
            backgroundColor:'rgba(0,0,0,0.1)',
            lineHeight:'36px',
            color:'white',
            textAlign:'center',
            right:'30px',
            cursor:'pointer',
            border: 'none',
        }}
        onClick={handleScroll}>^</button>
    )

    }
            
    </>
  )
}

export default BackToTop