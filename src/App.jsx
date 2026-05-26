import { useState, useRef } from "react";

const SLIDES = [
  { id: 1, title: "Title Card", icon: "✦", segments: [{ label: "संगीत केवल", speaker: "—", text: "", voice: "ash", instructions: "", isMusic: true }] },
  {
    id: 2, title: "सीन 1 — चम्पानगरी उद्यान", icon: "🌸",
    segments: [
      { label: "कथावाचन", speaker: "Narrator", voice: "onyx", instructions: "Speak in Hindi with a deep, calm, meditative tone. Like a documentary narrator. Slow and reverential.", text: "यह उस महान् काल की बात है — इस अवसर्पिणी के चतुर्थ आरक के अन्तिम समय की। जब सत्य अभी भी धरती पर विचरता था। जब मुक्ति की राह दिखाने वाले महापुरुष एक ग्राम से दूसरे ग्राम, सुख से विहार करते थे।" },
      { label: "जम्बू", speaker: "Jambu", voice: "ash", instructions: "Speak in Hindi with a young, curious, reverent tone. A devoted young disciple asking his guru with folded hands.", text: "हे भवभयहारी भगवन् ! यदि धर्म की आदि करने वाले विशेषण से लेकर उन श्रमण भगवान महावीर ने आठवें अंग-शास्त्र अन्तकृदशा में किस विषय का प्रतिपादन किया है ?" },
      { label: "सुधर्मा", speaker: "Sudharma", voice: "sage", instructions: "Speak in Hindi with a wise, elderly, gentle tone. Like a great sage passing on sacred knowledge.", text: "हे जम्बू ! श्रमण भगवान महावीर ने अन्तकृदशा के आठ वर्ग कहे हैं। प्रथम वर्ग में दस अध्ययन हैं — गौतम, समुद्र, सागर, गम्भीर, स्तिमित, अचल, काम्पिल्य, अक्षोभ, प्रसेनजित, विष्णु।" }
    ]
  },
  {
    id: 3, title: "सीन 2 — द्वारिका नगरी", icon: "🏰",
    segments: [
      { label: "कथावाचन", speaker: "Narrator", voice: "onyx", instructions: "Speak in Hindi with a grand, majestic, awe-inspiring tone. Describing a magnificent ancient city.", text: "उस काल में, इस जम्बूद्वीप के पश्चिम में — द्वारिका नाम की एक नगरी थी। बारह योजन लम्बी, नौ योजन चौड़ी। स्वयं कुबेर की बुद्धि से निर्मित। स्वर्ण के कोट से घिरी, पाँच वर्णों की मणियों से जड़ी — साक्षात् देवलोक की झलक देती वह नगरी। वहाँ राज्य करते थे — महाबाहु श्रीकृष्ण।" }
    ]
  },
  {
    id: 4, title: "सीन 3 — राजा अन्धकवृष्णि का महल", icon: "👑",
    segments: [
      { label: "कथावाचन", speaker: "Narrator", voice: "onyx", instructions: "Speak in Hindi. Calm, warm narration introducing a royal family. A touch of wonder describing a divine dream.", text: "उसी द्वारिका में एक और राजा थे — अन्धकवृष्णि। महान् हिमालय पर्वत की भाँति शक्तिशाली, मर्यादापालक। उनकी रानी थीं — धारिणी। एक रात — एक पुण्य की रात — रानी धारिणी ने स्वप्न देखा। दिव्य प्रकाश, आकाश से पुष्पवर्षा।" },
      { label: "धारिणी", speaker: "Dharini", voice: "nova", instructions: "Speak in Hindi. A gentle loving queen with wonder and softness. Slightly breathless with awe at her dream.", text: "स्वामी ! रात्रि में मैंने एक अद्भुत स्वप्न देखा — दिव्य प्रकाश, आकाश से पुष्पवर्षा। मन में असीम शान्ति। क्या इसका कोई अर्थ है ?" },
      { label: "अन्धकवृष्णि", speaker: "Andhakavrishni", voice: "onyx", instructions: "Speak in Hindi. A powerful king, deep voice, firm and proud but loving. Calm confidence of a mountain.", text: "देवि ! यह पुण्यशाली संकेत है। हमारे घर में कोई महान् आत्मा आने वाली है।" }
    ]
  },
  {
    id: 5, title: "सीन 4 — गौतम कुमार का वैभव", icon: "💎",
    segments: [
      { label: "कथावाचन", speaker: "Narrator", voice: "onyx", instructions: "Speak in Hindi. Warm, celebratory. A prince's glorious youth. Subtle undercurrent — all of this will be left behind.", text: "और वह बालक — जिसे माता ने गौतम नाम दिया — वह बड़ा हुआ। कलाओं में निपुण, युवा, बलवान, तेजस्वी। आठ उत्तम कुलीन राजकन्याओं के साथ एक ही दिन में उसका विवाह हुआ। आठ-आठ हिरण्य कोटि दहेज में मिले। संसार में जो कुछ पाने योग्य था — गौतम के पास सब था।" }
    ]
  },
  {
    id: 6, title: "सीन 5 — अरिष्टनेमि का समवसरण ⭐", icon: "✨",
    segments: [
      { label: "कथावाचन", speaker: "Narrator", voice: "onyx", instructions: "Speak in Hindi. Build slowly with reverence and awe. The arrival of a divine being. Each sentence should feel sacred.", text: "और फिर — वह दिन आया। अरिहन्त अरिष्टनेमि भगवान — धर्मतीर्थ की आदि करने वाले — द्वारिकानगरी में पधारे। चारों दिशाओं से देव आये। पृथ्वी पुण्यमयी हो उठी। भगवान की वाणी गूँजी — शान्त, गहरी, अनन्त। जैसे वर्षा की पहली बूँद सूखी धरती पर पड़े।" }
    ]
  },
  {
    id: 7, title: "सीन 6 — गौतम का हृदय-परिवर्तन ⭐⭐", icon: "💫",
    segments: [
      { label: "गौतम", speaker: "Gautam", voice: "ash", instructions: "Speak in Hindi. Deeply emotional. A young prince kneeling, voice breaking with tears. The most important moment of his life — the decision to renounce everything.", text: "हे प्रभो ! मैं चाहता हूँ — अपने माता-पिता को पूछकर आप देवानुप्रिय के पास श्रमण दीक्षा अंगीकार करूँगा।" },
      { label: "अरिष्टनेमि", speaker: "Arishtanemi", voice: "sage", instructions: "Speak in Hindi. Divine, infinitely calm and loving. Like God himself blessing a devotee. Every word carries eternal wisdom.", text: "वत्स ! जाओ। माता-पिता से आज्ञा लो। आत्मा का मार्ग किसी के बिना जाने नहीं चला जाता। लौट आना।" }
    ]
  },
  {
    id: 8, title: "सीन 7 — माता-पिता की विदाई", icon: "🙏",
    segments: [
      { label: "धारिणी", speaker: "Dharini", voice: "nova", instructions: "Speak in Hindi. A mother saying goodbye to her son leaving for spiritual life. Tearful but proud. Voice trembling with deep love.", text: "जाओ बेटा। मोक्ष-मार्ग पर जाओ। माँ का आशीष है तुम्हारे साथ।" },
      { label: "अन्धकवृष्णि", speaker: "Andhakavrishni", voice: "onyx", instructions: "Speak in Hindi. A proud father, firm but deeply emotional. A king who knows his son chooses something greater than a kingdom.", text: "हिमालय से जन्मी नदी सागर को जाती ही है, धारिणी। पुत्र — हमारा वंश आज धन्य हुआ। जाओ।" },
      { label: "कथावाचन", speaker: "Narrator", voice: "onyx", instructions: "Speak in Hindi. Slow, solemn, profound. Each line a separate breath. The moment of transformation.", text: "और वह पल आया — जब गौतम कुमार ने अपने रेशमी वस्त्र उतारे। राजकीय आभूषण उतारे। माता-पिता के चरण स्पर्श किए। और भगवान अरिष्टनेमि के पास श्रमण दीक्षा अंगीकार की। गौतम कुमार — अब मुनि गौतम बन गये थे।" }
    ]
  },
  {
    id: 9, title: "सीन 8 — दीक्षा और साधना", icon: "🧘",
    segments: [
      { label: "कथावाचन", speaker: "Narrator", voice: "onyx", instructions: "Speak in Hindi. Meditative, rhythmic. Each spiritual practice named with reverence. The pace of a monk walking through forests.", text: "मुनि गौतम विचरने लगे। ग्यारह अंगों का अध्ययन किया। बारह भिक्षु प्रतिमाओं की आराधना की। गुणरत्न तप — सोलह महीनों का महातप। चार सौ सात दिन तपश्चरण, तिहत्तर दिन पारणा। दिन को उत्कटुक आसन से सूर्य की आतापना। रात्रि में वस्त्र-रहित वीरासन से ध्यान।" }
    ]
  },
  {
    id: 10, title: "सीन 9 — शत्रुञ्जय पर्वत ⭐", icon: "⛰️",
    segments: [
      { label: "कथावाचन", speaker: "Narrator", voice: "onyx", instructions: "Speak in Hindi. Building tension with each line. Like climbing a mountain — each step heavier, more sacred.", text: "शत्रुञ्जय। वह पर्वत — जहाँ अनगिनत महात्माओं ने अपनी अन्तिम साधना की। मुनि गौतम चढ़ रहे थे। एक-एक पग। हर पग के साथ — एक कर्म कम। हर पग के साथ — एक बन्धन ढीला।" },
      { label: "गौतम", speaker: "Gautam", voice: "ash", instructions: "Speak in Hindi. Serene monk. No fear, only peace. Gently saying goodbye to fellow monks.", text: "बंधुओ ! मैं यहाँ एक माह की संलेखना करूँगा। आत्मा अकेले ही मुक्त होती है।" }
    ]
  },
  {
    id: 11, title: "सीन 10 — केवलज्ञान और मोक्ष ⭐⭐⭐", icon: "☀️",
    segments: [
      { label: "कथावाचन", speaker: "Narrator", voice: "onyx", instructions: "Speak in Hindi. The climax — most sacred moment. Start slow and quiet, build with each sentence. Anant Gyan... Anant Darshan — each louder, more radiant. Then settle into eternal peace.", text: "और वह क्षण आया। जिसके लिए जन्म था। जिसके लिए त्याग था। जिसके लिए साधना थी। जिसके लिए तप था। जिसके लिए यह सारी यात्रा थी। केवलज्ञान का प्रकाश — ऐसा जो सूर्य को भी फीका कर दे। अनन्त ज्ञान। अनन्त दर्शन। अनन्त शक्ति। अनन्त आनन्द। मुनि गौतम — सिद्ध हो गये। मुक्त हो गये। शाश्वत हो गये।" }
    ]
  },
  {
    id: 12, title: "सीन 11 — शेष 9 भाई", icon: "🌺",
    segments: [
      { label: "कथावाचन", speaker: "Narrator", voice: "onyx", instructions: "Speak in Hindi. Peaceful, settling tone. Like the final verse of a hymn. Names listed with reverence.", text: "इस प्रकार मुनि गौतम कुमार की तरह शेष 9 अध्ययन भी समझने चाहिये। सबके पिता वृष्णि एवं माता धारिणी थी। दो समुद्र, तीन सागर, चार गम्भीर, पाँच स्तिमित, छह अचल, सात काम्पिल्य, आठ अक्षोभ, नौ प्रसेनजित, दस विष्णु। सब सिद्ध हुए। सब मुक्त हुए।" },
      { label: "जम्बू", speaker: "Jambu", voice: "ash", instructions: "Speak in Hindi. A young monk in awe, voice soft with wonder and gratitude.", text: "गुरुदेव... गौतम कुमार ने यह सब छोड़ा — राज्य, वैभव, प्रेम — और पाया — सब कुछ।" },
      { label: "सुधर्मा", speaker: "Sudharma", voice: "sage", instructions: "Speak in Hindi. Final wisdom of a great sage. Calm, conclusive, timeless.", text: "हाँ, जम्बू। जो छोड़ता है — वही पाता है। मोक्ष एक की नहीं — जो चाहे पा सकता है। यही अन्तकृदशा का सन्देश है।" }
    ]
  },
  { id: 13, title: "End Card — प्रथम वर्ग समाप्त", icon: "🕊️", segments: [{ label: "संगीत केवल", speaker: "—", text: "", voice: "ash", instructions: "", isMusic: true }] }
];

const VC = { onyx: "#e94560", ash: "#f5a623", nova: "#e91e63", sage: "#52b788" };
const S = { idle: "idle", loading: "loading", done: "done", error: "error" };
const K = (sid, i) => `${sid}-${i}`;

export default function App() {
  const [apiKey, setApiKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [states, setStates] = useState({});
  const [urls, setUrls] = useState({});
  const [open, setOpen] = useState(2);
  const [msg, setMsg] = useState("");
  const [playing, setPlaying] = useState(null);
  const refs = useRef({});

  const setSt = (k, v) => setStates(p => ({ ...p, [k]: v }));

  const gen = async (slide, seg, i) => {
    if (!apiKey.trim()) { alert("OpenAI API Key enter करें"); return; }
    if (!seg.text) return;
    const k = K(slide.id, i);
    setSt(k, S.loading);
    try {
      const r = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey.trim()}` },
        body: JSON.stringify({ model: "gpt-4o-mini-tts", input: seg.text, voice: seg.voice, instructions: seg.instructions, response_format: "mp3" })
      });
      if (!r.ok) { const e = await r.json(); throw new Error(e.error?.message || "API Error"); }
      const blob = await r.blob();
      setUrls(p => ({ ...p, [k]: URL.createObjectURL(blob) }));
      setSt(k, S.done);
    } catch (e) { setSt(k, S.error); setMsg("❌ " + e.message); }
  };

  const genAll = async () => {
    if (!apiKey.trim()) { alert("OpenAI API Key enter करें"); return; }
    let n = 0;
    for (const sl of SLIDES) {
      for (let i = 0; i < sl.segments.length; i++) {
        const sg = sl.segments[i];
        if (!sg.text || sg.isMusic) continue;
        setMsg(`⏳ Generating ${++n}... (${sl.title})`);
        await gen(sl, sg, i);
        await new Promise(r => setTimeout(r, 400));
      }
    }
    setMsg(`✅ सभी ${n} audios ready!`);
  };

  const play = (k) => {
    if (playing && refs.current[playing]) { refs.current[playing].pause(); refs.current[playing].currentTime = 0; }
    if (playing === k) { setPlaying(null); return; }
    refs.current[k]?.play();
    setPlaying(k);
    if (refs.current[k]) refs.current[k].onended = () => setPlaying(null);
  };

  const dl = (k, label) => { const a = document.createElement("a"); a.href = urls[k]; a.download = `gautam-slide-${k}-${label}.mp3`; a.click(); };
  const dlAll = () => Object.entries(urls).forEach(([k, u], i) => setTimeout(() => { const a = document.createElement("a"); a.href = u; a.download = `gautam-${k}.mp3`; a.click(); }, i * 250));

  const total = SLIDES.flatMap(s => s.segments.filter(sg => sg.text && !sg.isMusic)).length;
  const done = Object.values(states).filter(s => s === S.done).length;
  const pct = Math.round((done / total) * 100);

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#06060f 0%,#0d1520 60%,#080e18 100%)", fontFamily: "'Noto Serif Devanagari',Georgia,serif", color: "#e8dcc8", paddingBottom: 80 }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(180deg,rgba(201,168,76,.13) 0%,transparent 100%)", borderBottom: "1px solid rgba(201,168,76,.18)", padding: "28px 20px 20px", textAlign: "center" }}>
        <div style={{ fontSize: 10, letterSpacing: 5, color: "#c9a84c", marginBottom: 6, textTransform: "uppercase" }}>अंतगडदसाङ्ग सूत्र · प्रथम वर्ग</div>
        <h1 style={{ margin: "0 0 4px", fontSize: "clamp(20px,5vw,34px)", fontWeight: 700, color: "#ffd700", textShadow: "0 0 40px rgba(255,215,0,.25)", letterSpacing: 1 }}>गौतम — मुक्ति का मार्ग</h1>
        <div style={{ color: "#8a7a6a", fontSize: 12 }}>Movie Audio Generator · OpenAI gpt-4o-mini-tts · {total} segments</div>
      </div>

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "20px 14px" }}>
        {/* API Key */}
        <div style={{ background: "rgba(255,215,0,.04)", border: "1px solid rgba(255,215,0,.18)", borderRadius: 12, padding: "18px 20px", marginBottom: 20 }}>
          <div style={{ fontSize: 11, color: "#c9a84c", marginBottom: 7, letterSpacing: 1 }}>🔑 OPENAI API KEY</div>
          <div style={{ display: "flex", gap: 8 }}>
            <input type={showKey ? "text" : "password"} value={apiKey} onChange={e => setApiKey(e.target.value)} placeholder="sk-proj-..." style={{ flex: 1, background: "rgba(0,0,0,.45)", border: "1px solid rgba(255,215,0,.25)", borderRadius: 8, padding: "9px 13px", color: "#e8dcc8", fontSize: 13, fontFamily: "monospace", outline: "none" }} />
            <button onClick={() => setShowKey(!showKey)} style={{ background: "rgba(255,215,0,.08)", border: "1px solid rgba(255,215,0,.25)", borderRadius: 8, color: "#ffd700", padding: "0 14px", cursor: "pointer", fontSize: 15 }}>{showKey ? "🙈" : "👁️"}</button>
          </div>
          <div style={{ fontSize: 11, color: "#5a4a3a", marginTop: 6 }}>Key यहाँ save नहीं होती — सीधे OpenAI API से connect होती है।</div>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
          <button onClick={genAll} style={{ background: "linear-gradient(135deg,#c9a84c,#ffd700)", border: "none", borderRadius: 10, color: "#06060f", fontWeight: 700, fontSize: 13, padding: "11px 22px", cursor: "pointer", flex: "1 1 180px" }}>⚡ सभी {total} Generate करें</button>
          {done > 0 && <button onClick={dlAll} style={{ background: "rgba(82,183,136,.13)", border: "1px solid #52b788", borderRadius: 10, color: "#52b788", fontWeight: 600, fontSize: 13, padding: "11px 22px", cursor: "pointer", flex: "1 1 140px" }}>⬇️ सब Download ({done})</button>}
          <div style={{ flex: "2 1 180px", display: "flex", alignItems: "center", gap: 8, background: "rgba(0,0,0,.25)", borderRadius: 8, padding: "0 12px", height: 42 }}>
            <div style={{ flex: 1, height: 5, background: "rgba(255,255,255,.08)", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ height: "100%", width: pct + "%", background: "linear-gradient(90deg,#c9a84c,#52b788)", transition: "width .4s", borderRadius: 3 }} />
            </div>
            <span style={{ fontSize: 11, color: "#8a7a6a", whiteSpace: "nowrap" }}>{done}/{total} · {pct}%</span>
          </div>
        </div>

        {msg && <div style={{ background: "rgba(82,183,136,.08)", border: "1px solid rgba(82,183,136,.25)", borderRadius: 8, padding: "9px 14px", marginBottom: 16, fontSize: 12, color: "#52b788" }}>{msg}</div>}

        {/* Slides */}
        {SLIDES.map(sl => {
          const isOpen = open === sl.id;
          const segs = sl.segments.filter(sg => !sg.isMusic);
          const allDone = segs.length > 0 && segs.every((_, i) => states[K(sl.id, i)] === S.done);
          return (
            <div key={sl.id} style={{ background: "rgba(255,255,255,.025)", border: `1px solid ${allDone ? "rgba(82,183,136,.35)" : "rgba(255,215,0,.08)"}`, borderRadius: 12, marginBottom: 10, overflow: "hidden" }}>
              <button onClick={() => setOpen(isOpen ? null : sl.id)} style={{ width: "100%", background: "none", border: "none", padding: "14px 18px", display: "flex", alignItems: "center", gap: 10, cursor: "pointer", textAlign: "left" }}>
                <span style={{ fontSize: 18 }}>{sl.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "#e8dcc8", fontWeight: 600, fontSize: 13 }}>Slide {sl.id} — {sl.title}</div>
                  <div style={{ color: "#6a5a4a", fontSize: 11, marginTop: 1 }}>{sl.segments.filter(sg => !sg.isMusic).length} voice segments</div>
                </div>
                <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                  {segs.map((_, i) => { const st = states[K(sl.id, i)]; return <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: st === S.done ? "#52b788" : st === S.loading ? "#ffd700" : st === S.error ? "#e94560" : "rgba(255,255,255,.12)", transition: "background .3s" }} />; })}
                  <span style={{ color: "#5a4a3a", marginLeft: 4, fontSize: 11 }}>{isOpen ? "▲" : "▼"}</span>
                </div>
              </button>

              {isOpen && (
                <div style={{ padding: "0 18px 18px", borderTop: "1px solid rgba(255,255,255,.05)" }}>
                  {sl.segments.map((seg, i) => {
                    const k = K(sl.id, i);
                    const st = states[k] || S.idle;
                    const url = urls[k];
                    const ac = VC[seg.voice] || "#c9a84c";
                    const isPlaying = playing === k;
                    if (seg.isMusic) return (
                      <div key={i} style={{ marginTop: 14, padding: "10px 14px", background: "rgba(255,255,255,.02)", borderRadius: 8, color: "#5a4a3a", fontSize: 12, fontStyle: "italic" }}>
                        🎵 {seg.label} — Suno.ai से generate करें और Canva में add करें
                      </div>
                    );
                    return (
                      <div key={i} style={{ marginTop: 14, border: `1px solid ${ac}28`, borderLeft: `3px solid ${ac}`, borderRadius: 8, padding: "12px 14px", background: "rgba(0,0,0,.2)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, flexWrap: "wrap", gap: 6 }}>
                          <div>
                            <span style={{ fontSize: 10, color: ac, letterSpacing: 1, textTransform: "uppercase", fontWeight: 700 }}>{seg.label}</span>
                            <span style={{ fontSize: 10, color: "#4a3a2a", marginLeft: 8 }}>· {seg.voice}</span>
                          </div>
                          <div style={{ display: "flex", gap: 5 }}>
                            <button onClick={() => gen(sl, seg, i)} style={{ background: st === S.done ? "rgba(82,183,136,.18)" : `${ac}18`, border: `1px solid ${st === S.done ? "#52b788" : ac}50`, borderRadius: 6, color: st === S.done ? "#52b788" : ac, padding: "4px 11px", cursor: st === S.loading ? "wait" : "pointer", fontSize: 11, fontWeight: 600 }}>
                              {st === S.loading ? "⏳..." : st === S.done ? "✅ Done" : st === S.error ? "❌ Retry" : "🎙️ Generate"}
                            </button>
                            {url && <>
                              <button onClick={() => play(k)} style={{ background: isPlaying ? "rgba(255,215,0,.18)" : "rgba(255,255,255,.05)", border: `1px solid ${isPlaying ? "#ffd700" : "rgba(255,255,255,.12)"}`, borderRadius: 6, color: isPlaying ? "#ffd700" : "#e8dcc8", padding: "4px 9px", cursor: "pointer", fontSize: 13 }}>{isPlaying ? "⏹" : "▶️"}</button>
                              <button onClick={() => dl(k, seg.label)} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 6, color: "#e8dcc8", padding: "4px 9px", cursor: "pointer", fontSize: 12 }}>⬇</button>
                              <audio ref={el => refs.current[k] = el} src={url} style={{ display: "none" }} />
                            </>}
                          </div>
                        </div>
                        <div style={{ fontSize: 13, lineHeight: 1.85, color: "#d4c4a8", marginBottom: 7 }}>{seg.text}</div>
                        <div style={{ fontSize: 10, color: "#4a3a2a", fontStyle: "italic", borderTop: "1px solid rgba(255,255,255,.04)", paddingTop: 7 }}>📋 {seg.instructions}</div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        <div style={{ marginTop: 28, padding: "14px 18px", background: "rgba(255,215,0,.03)", border: "1px solid rgba(255,215,0,.09)", borderRadius: 10, fontSize: 11, color: "#6a5a4a", lineHeight: 1.8 }}>
          <strong style={{ color: "#c9a84c" }}>📽️ Canva में assemble करने का तरीका:</strong><br />
          1. MP3 download करें → Canva slide खोलें → Uploads → Audio में attach करें<br />
          2. Canva Video timeline पर audio और slide sync करें<br />
          3. Suno.ai से background music → background audio में add करें<br />
          4. Share → Download → MP4 🎬
        </div>
      </div>
    </div>
  );
}
