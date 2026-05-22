* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Inter, Arial, sans-serif;
}

:root{
  --bg: #0b0f14;
  --panel: #020617;
  --text: #e6eef6;
  --muted: rgba(230,238,246,0.82);
  --gold: #ffd54f;
  --blue: #38bdf8;
  --radius: 20px;
}

body {
  background: var(--bg);
  color: var(--text);
  line-height: 1.5;
}

/* Layout */
.container{
  width: min(1100px, calc(100% - 40px));
  margin: 0 auto;
}

.section{
  padding: 90px 0;
}

.section-accent{
  background: linear-gradient(135deg, #0f172a, #020617);
  border-left: 4px solid var(--blue);
}

.section-title{
  font-size: clamp(28px, 3.2vw, 40px);
  margin-bottom: 28px;
}

.lead{
  font-size: clamp(18px, 2vw, 22px);
  color: var(--muted);
  max-width: 900px;
}

.highlight{
  margin-top: 20px;
  font-size: clamp(18px, 2vw, 22px);
  color: var(--gold);
}

/* HERO */
.hero{
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 80px 0;
  /* ВОТ ЗДЕСЬ ИЗМЕНЕН ФОН */
  background:
    linear-gradient(rgba(11,15,20,0.70), rgba(11,15,20,0.88)),
    url("WhatsApp Image 2026-05-22 at 12.41.36.jpeg") center top / cover no-repeat;
}

.hero-inner{
  text-align: center;
  padding: 40px 20px;
}

.badge{
  display: inline-block;
  background: linear-gradient(90deg, var(--gold), var(--blue));
  color: #0b0f14;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 18px;
}

.hero-title{
  font-size: clamp(52px, 7vw, 88px);
  letter-spacing: 0.5px;
}

.hero-subtitle{
  margin-top: 8px;
  font-size: 20px;
  opacity: 0.9;
}

.hero-slogan{
  margin: 26px auto 0;
  max-width: 780px;
  font-size: 18px;
  color: var(--muted);
}

.hero-actions{
  margin-top: 26px;
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn{
  display: inline-block;
  padding: 14px 26px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 800;
  transition: transform 0.25s, box-shadow 0.25s, opacity 0.25s;
}

.btn-primary{
  background: linear-gradient(90deg, var(--gold), var(--blue));
  color: #0b0f14;
}

.btn-ghost{
  border: 1px solid rgba(230,238,246,0.22);
  color: var(--text);
  background: rgba(2,6,23,0.35);
}

.btn:hover{
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(56,189,248,0.20);
}

/* Cards grid */
.grid{
  display: grid;
  gap: 26px;
}

.cards{
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.card{
  background: var(--panel);
  padding: 34px;
  border-radius: var(--radius);
  border: 1px solid rgba(230,238,246,0.06);
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
}

.card h3{
  font-size: 20px;
  margin-bottom: 10px;
}

.card p{
  color: var(--muted);
}

.card:hover{
  transform: translateY(-6px);
  border-color: rgba(255,213,79,0.35);
  box-shadow:
    0 0 0 2px rgba(255,213,79,0.35),
    0 28px 70px rgba(56,189,248,0.18);
}

.card-highlight{
  background: linear-gradient(180deg, #020617, #020617);
}

.accent-title{
  color: var(--gold);
}

/* TEAM */
.team{
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.photo{
  background: rgba(2,6,23,0.35);
  border: 1px solid rgba(230,238,246,0.06);
  border-radius: var(--radius);
  overflow: hidden;
}

.photo img{
  width: 100%;
  height: 340px;
  object-fit: cover;
  display: block;
  transition: transform 0.35s;
}

.photo:hover img{
  transform: scale(1.04);
}

/* Footer / Contacts */
.footer{
  background: linear-gradient(180deg, #020617, #020617);
  padding: 100px 0;
  text-align: center;
}

.footer-title{
  margin-bottom: 10px;
}

.footer-subtitle{
  color: var(--muted);
  margin-top: 8px;
}

.contacts{
  margin-top: 44px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.contact-card{
  background: rgba(11,15,20,0.8);
  padding: 40px;
  border-radius: 22px;
  color: var(--text);
  text-decoration: none;
  border: 1px solid rgba(230,238,246,0.06);
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
}

.contact-card:hover{
  transform: translateY(-6px);
  border-color: rgba(56,189,248,0.45);
  box-shadow: 0 22px 60px rgba(56,189,248,0.18);
}

.to-top{
  display: inline-block;
  margin-top: 40px;
  color: rgba(230,238,246,0.75);
  text-decoration: none;
}

.to-top:hover{
  color: var(--text);
}

/* Mobile spacing */
@media (max-width: 520px){
  .section{ padding: 70px 0; }
  .photo img{ height: 260px; }
}
