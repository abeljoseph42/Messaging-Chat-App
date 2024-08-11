import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '96acf1c0-a246-46ff-8cba-9372ff3197ee', 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style = {{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%'}} /> 
        </div>)
  };

export default ChatsPage;