const MyMessage = ({message}) => {
    if(message?.attachements?.length > 0) {
        return ( 
            < img 
               src={message.attachements[0].file}
               alt="message-attachment"
               className="message-image"
               style={{ float: 'right'}}
            />
        ) 
    }

    return (
        <div>
            MyMessage
        </div>
    );
}

export default MyMessage;