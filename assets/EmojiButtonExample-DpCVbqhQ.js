import{PA as e,PB as s,PC as t,PD as o,Y7 as i,Y8 as a,QL as m,Eg as n,QI as c,PF as r,R2 as j,Y9 as l}from"./index-Mlv1mu-n.js";const p=`
import Button from 'components/base/Button';

function EmojiButtonExample() {
  const [previewEmoji, setPreviewEmoji] = useState(false); 
  const [message, setMessage] = useState('');

  const { 
    config: { isDark }
  } = useAppContext();

  const addEmoji = (emojiData: EmojiClickData) => {
    console.log(message + emojiData.emoji)
    setMessage(message + emojiData.emoji);
    setPreviewEmoji(false);
  }

  return (
    <div className="position-relative">
      <Button
        variant="primary"
        className="fs-7"
        onClick={() => setPreviewEmoji(!previewEmoji)}
      >
        <FontAwesomeIcon icon={faFaceSmile} />
      </Button>
      {previewEmoji && (
        <EmojiPicker
          theme={isDark ? Theme.DARK : Theme.LIGHT}
          onEmojiClick={addEmoji}
          skinTonesDisabled
          previewConfig={{ showPreview: false }}
          emojiStyle={EmojiStyle.GOOGLE}
        />
      )}
    </div>
  )
}
`,E=()=>e.jsxs("div",{className:"mb-9",children:[e.jsx(s,{title:"Emoji button",description:"Phoenix-React uses Picmo as a emoji picker component. It displays a panel of emojis where one can be selected. What is done with the selected emoji is up to you.",link:{text:"Documentation for Picmo",url:"https://picmojs.com/docs/api/overview/"}}),e.jsx(t,{children:e.jsxs(o,{children:[e.jsx(o.Header,{title:"Example"}),e.jsx(o.Body,{code:p,scope:{EmojiPicker:l,Button:j,FontAwesomeIcon:r,useState:c.useState,faFaceSmile:n,useAppContext:m,Theme:a,EmojiStyle:i}})]})})]});export{E as default};
