function AIConsole({ open, onOpen, onClose }) {
  const [tab, setTab] = React.useState('chat');
  const [messages, setMessages] = React.useState([
    { who: 'agent', text: 'Greetings! I am the Century Advantage AI Assistant. I manage lead intakes, routing, and automated matches. How may I help you today?' },
  ]);
  const [showOpts, setShowOpts] = React.useState(true);

  const ask = (label) => {
    setMessages(m => [
      ...m,
      { who: 'user', text: label },
      { who: 'agent', text: 'Understood. Could you share your preferred locality and budget range? An advisor will be matched within four hours.' },
    ]);
    setShowOpts(false);
  };

  const [draft, setDraft] = React.useState('');
  const send = (e) => {
    e.preventDefault();
    if (!draft.trim()) return;
    setMessages(m => [
      ...m,
      { who: 'user', text: draft.trim() },
      { who: 'agent', text: 'Thank you. Your brief has been routed to the most-relevant advisor. You will receive a curated shortlist of three residences within 24 hours.' },
    ]);
    setDraft('');
    setShowOpts(false);
  };

  return (
    <>
      {!open && (
        <div className="fab-stack">
          <button className="fab coral" onClick={onOpen} aria-label="Open AI assistant">
            <Icon name="message" size={22}/>
            <span className="fab-badge">AI</span>
          </button>
          <a className="fab whatsapp" href="https://wa.me/918040005000" target="_blank" rel="noopener" aria-label="WhatsApp">
            <WhatsAppIcon size={26}/>
          </a>
        </div>
      )}
      <aside className={'ai-drawer' + (open ? ' open' : '')}>
        <div className="ai-head">
          <div className="ai-head-info">
            <div className="ai-avatar"><Icon name="sparkles" size={18}/></div>
            <div>
              <h3>Century AI Agent <span className="ai-dot"/></h3>
              <p>Lead capture &amp; matching engine</p>
            </div>
          </div>
          <button className="ai-close" onClick={onClose} aria-label="Close"><Icon name="x" size={18}/></button>
        </div>
        <div className="ai-tabs">
          <button className={'ai-tab'+(tab==='chat'?' active':'')} onClick={()=>setTab('chat')}>Qualification Chat</button>
          <button className={'ai-tab'+(tab==='logs'?' active':'')} onClick={()=>setTab('logs')}>Automation Logs</button>
        </div>
        <div className="ai-body">
          {tab === 'chat' && (
            <>
              {messages.map((m,i) => (
                <div key={i} className={'bubble ' + m.who}>{m.text}</div>
              ))}
              {showOpts && (
                <div className="chat-opts">
                  <button className="chat-opt" onClick={() => ask('I want to rent a property.')}>I want to Rent a Property</button>
                  <button className="chat-opt" onClick={() => ask('I want to buy a resale property.')}>I want to Buy a Resale Property</button>
                  <button className="chat-opt" onClick={() => ask('I am an owner wanting to list.')}>I am an Owner wanting to List</button>
                </div>
              )}
            </>
          )}
          {tab === 'logs' && (
            <>
              <div className="bubble system">Waiting for automated triggers. Submit any lead form to see SMS responses, advisor routing, and follow-up timelines.</div>
              <div className="bubble system">Last advisor match · 11 min ago · Hebbal, 3 BHK Resale.</div>
              <div className="bubble system">Last WhatsApp confirmation · 38 min ago · Whitefield site visit.</div>
            </>
          )}
        </div>
        <form className="ai-foot" onSubmit={send}>
          <input value={draft} onChange={e=>setDraft(e.target.value)} placeholder="Type a message or answer…"/>
          <button type="submit"><Icon name="send" size={16}/></button>
        </form>
      </aside>
    </>
  );
}

window.AIConsole = AIConsole;
