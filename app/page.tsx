const Check = () => <span className="check" aria-hidden="true">✓</span>;

export default function Home() {
  return (
    <main>
      <header className="nav"><a className="brand" href="#top"><span className="brandMark">A</span><span>AI APP SCHOOL</span></a><a className="navCta" href="#entry">無料で相談する</a></header>
      <section className="hero" id="top">
        <div className="heroGlow" />
        <div className="heroCopy">
          <p className="eyebrow">プログラミング経験ゼロから始める</p>
          <h1>アイデアさえあれば、<br /><em>誰でもアプリは作れる。</em></h1>
          <p className="heroLead">パソコンが苦手でも大丈夫。<br />スマホの隙間時間にAIへ指示して、<br />あなたの業務アイデアを実際に動くアプリへ。</p>
          <div className="heroProof"><span><strong>10</strong>時間の実践講座</span><span><strong>98,000</strong>円（税込）</span></div>
          <a className="primaryCta" href="#entry">自分のアイデアを相談する <span>→</span></a>
          <p className="micro">相談無料・アイデアがまとまっていなくてもOK</p>
        </div>
        <div className="heroVisual" aria-label="スマートフォンからAIにアプリ開発を指示するイメージ">
          <div className="orbit orbitOne">顧客管理</div><div className="orbit orbitTwo">予約管理</div>
          <div className="phone"><div className="phoneTop" /><div className="phoneScreen">
            <div className="appHead"><span className="appIcon">A</span><span>開発サポートAI</span><i /></div>
            <div className="chat userChat">占い結果とお客様を管理できるアプリを作りたい</div>
            <div className="chat aiChat"><span>✦</span><p>了解しました。必要な画面と機能を整理して、アプリを作り始めます。</p></div>
            <div className="progress"><div /><p>アプリを構築中...</p></div>
            <div className="miniApp"><div className="miniBar"><b>Fortune Manager</b><span>＋ 新規登録</span></div><div className="miniStats"><i /><i /><i /></div><div className="miniRows"><i /><i /><i /></div></div>
          </div></div>
          <div className="successBadge"><b>✓</b><span>アプリ公開<br /><strong>完了！</strong></span></div>
        </div>
      </section>
      <section className="proofBand"><p>実際の受講事例</p><h2>パソコン初心者が、約10時間で<br /><em>占い管理アプリの80％を完成。</em></h2><span>顧客管理・占い結果の記録など、本人のアイデアをAIとの対話でアプリ化しました。</span></section>
      <section className="section problem">
        <p className="sectionLabel">こんな思いはありませんか？</p><h2>「あったら便利」を、<br />アイデアのまま終わらせない。</h2>
        <div className="problemGrid">
          <article><span>01</span><div className="lineIcon">⌁</div><h3>業務に合うアプリがない</h3><p>既製品では機能が足りない。かといって開発会社への依頼は高すぎる。</p></article>
          <article><span>02</span><div className="lineIcon">⌘</div><h3>プログラミングは難しそう</h3><p>専門用語やコードは分からない。パソコン操作にも自信がない。</p></article>
          <article><span>03</span><div className="lineIcon">↗</div><h3>アイデアを収益にしたい</h3><p>自分の経験から生まれたアイデアを、形にして外販してみたい。</p></article>
        </div>
      </section>
      <section className="section method">
        <div className="methodIntro"><p className="sectionLabel light">必要なのは、あなたの言葉だけ</p><h2>コードを書くのではなく、<br /><em>AIにやりたいことを伝える。</em></h2><p>専用のGitHubサポートアプリが、開発・保存・公開までを支えます。スマホから指示できるので、まとまったパソコン時間も必要ありません。</p></div>
        <div className="steps">
          <article><b>STEP 1</b><span>💡</span><div><h3>アイデアを伝える</h3><p>「こんなアプリが欲しい」を普段の言葉で説明します。</p></div></article>
          <article><b>STEP 2</b><span>📱</span><div><h3>スマホでAIに指示</h3><p>移動中や待ち時間にも、画面や機能の修正を進められます。</p></div></article>
          <article><b>STEP 3</b><span>🚀</span><div><h3>動くアプリを公開</h3><p>実際に触れて、人に見せられるアプリとして公開します。</p></div></article>
        </div>
      </section>
      <section className="section curriculum">
        <p className="sectionLabel">10時間で「作れる人」へ</p><h2>知識を覚える講座ではなく、<br /><em>自分のアプリを作る実践講座。</em></h2>
        <div className="curriculumWrap"><div className="timeCard"><p>合計</p><strong>10<small>時間</small></strong><span>マンツーマン実践</span></div><div className="curriculumList">
          <p><Check />アイデアと必要機能の整理</p><p><Check />AIへの伝え方・修正指示</p><p><Check />画面・データベース・ログイン機能</p><p><Check />スマートフォン表示の調整</p><p><Check />GitHubへの保存とアプリ公開</p><p><Check />外販に向けた料金・運用の考え方</p>
        </div></div><p className="note">※制作するアプリの内容や習熟度により、10時間時点の完成度は異なります。</p>
      </section>
      <section className="section advantage">
        <div className="advantageText"><p className="sectionLabel">開発だけでは終わりません</p><h2>教えるのは、<br /><em>税理士×アプリ開発者。</em></h2><p>業務の流れ、売上、請求、入金、経費、利益まで理解した税理士だから、「作れる」だけでなく、事業で本当に使えるアプリを一緒に考えられます。</p><ul><li><Check />事業の仕組みに合わせた機能設計</li><li><Check />外販・料金設定・収益化の相談</li><li><Check />希望者には税務・経営の継続支援</li></ul></div>
        <div className="businessCard"><p>APP × BUSINESS</p><div className="venn"><span>アプリ<br />開発</span><span>税務<br />経営</span><b>事業で<br />使える</b></div><small>作る技術と、商売を見る視点をひとつに。</small></div>
      </section>
      <section className="teacherPath"><p className="sectionLabel light">その経験を、次の仕事に</p><h2>作れるようになったら、<br /><em>今度は「教える人」へ。</em></h2><p>受講後に制作経験を積み、所定の審査に合格すれば、認定講師として活動できる仕組みを準備しています。</p><div className="path"><span><b>01</b>自分のアプリを作る</span><i>→</i><span><b>02</b>制作経験を積む</span><i>→</i><span><b>03</b>認定審査</span><i>→</i><span className="pathGoal"><b>04</b>講師として活動</span></div><small>※講師認定・仕事の紹介を保証するものではありません。認定には別途審査があります。</small></section>
      <section className="section price" id="entry"><p className="sectionLabel">まずは、あなたのアイデアから</p><h2>AI業務アプリ開発<br />実践スクール</h2><div className="priceCard"><div className="priceTop"><p>マンツーマン・合計10時間</p><span><small>受講料</small><strong>98,000</strong>円<small>（税込）</small></span></div><div className="benefits"><span><Check />事前ヒアリング</span><span><Check />自分のアプリ制作</span><span><Check />公開までサポート</span><span><Check />受講後30日間の質問対応</span></div><a className="primaryCta wide" href="mailto:info@example.com?subject=AIアプリ開発スクール無料相談">無料でアイデアを相談する <span>→</span></a><p>無理な勧誘はありません。相談後に受講を決められます。</p></div></section>
      <section className="faq section"><p className="sectionLabel">よくある質問</p><h2>FAQ</h2><details><summary><span>Q</span>本当にパソコン初心者でも大丈夫ですか？</summary><p>大丈夫です。実際にパソコン初心者の方が約10時間で占い管理アプリの約80％を完成させています。基本操作から一緒に進めます。</p></details><details><summary><span>Q</span>アイデアがまだ漠然としています。</summary><p>問題ありません。事前ヒアリングで「誰の、どんな困りごとを解決するか」から整理します。</p></details><details><summary><span>Q</span>10時間で必ず完成しますか？</summary><p>機能の複雑さにより完成度は異なります。10時間で主要機能が動き、人に見せられる状態を目指します。</p></details><details><summary><span>Q</span>作ったアプリを販売できますか？</summary><p>外販を想定した作り方や料金設計も扱います。ただし、販売前には用途に応じたセキュリティや法的確認が必要です。</p></details></section>
      <footer><a className="brand" href="#top"><span className="brandMark">A</span><span>AI APP SCHOOL</span></a><p>作りたいものがある人を、作れる人に。</p><small>© 2026 AI APP SCHOOL</small></footer>
    </main>
  );
}
