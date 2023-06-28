import React from "react"




export default function Main(){
    

    const [meme,setmeme]=React.useState({
        topText:" ",
        bottomText:" ",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    
    
    
    
    



    


    
   
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
            
    }, [])

    function getImage(){
       
        const random=Math.floor(Math.random()*allMemes.length)
        const url=allMemes[random].url
        setmeme(pre=>{
            return {
                ...pre,
                randomImage:url
            }
        })
    }
    function handleChange(event) {
        const {name, value} = event.target
        setmeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
  
    

    return(


        <div className="main">
        <div action="">

        <input placeholder="Top Text" id="p1" className="input1" type="text" name="topText" value={meme.topText
        }    onChange={handleChange} />
        <input placeholder="Bottom text" id="p2" className="input2" type="text" name="bottomText" value={meme
        .bottomText}  onChange={handleChange} />
        <button  className="btn" onClick={getImage}>Get The New Image</button>
        <div id="my">
            
        <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
        
        
        
        
        
        
        </div>
            

        
        
        
        </div>
        </div>
    )
}