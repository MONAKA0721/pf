import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Timeline from "@material-ui/lab/Timeline";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import React, { useState } from "react";
import { useT } from "../i18n";
import { ui } from "../i18n/translations";

const useStyles = makeStyles((theme) => ({
  date: {
    fontFamily: ["Noto Sans JP", "serif"].join(","),
  },
  company: {
    fontFamily: ["Noto Sans JP", "serif"].join(","),
  },
  description: {
    fontFamily: ["Noto Sans JP", "serif"].join(","),
    whiteSpace: "pre-line",
  },
  expandRow: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginTop: theme.spacing(0.5),
  },
  expandIcon: {
    padding: 4,
    color: "#ffffff",
    transition: "transform 0.3s",
  },
  expandIconOpen: {
    padding: 4,
    color: "#ffffff",
    transition: "transform 0.3s",
    transform: "rotate(180deg)",
  },
  expandLabel: {
    fontFamily: ["Noto Sans JP", "serif"].join(","),
    fontSize: "0.8rem",
    color: "#ffffff",
  },
  detail: {
    fontFamily: ["Noto Sans JP", "serif"].join(","),
    whiteSpace: "pre-line",
    marginTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    borderLeft: `2px solid ${theme.palette.divider}`,
  },
}));

const careers = [
  {
    date: "2025/6 ~ NOW",
    company: { ja: "株式会社bamboooo", en: "bamboooo Inc." },
    description: {
      ja: `CTO
                  友人と起業し、受託開発事業を行っています。Webアプリケーション / AIアプリケーション 開発を中心に、フロントエンド・バックエンドを担当しています。`,
      en: `CTO
                  I co-founded the company with a friend, and we run a contract development business. I handle both the frontend and the backend, focusing on web and AI application development.`,
    },
    detail: {
      ja: `着物リメイクシミュレーションツール開発ではアップロードされた写真に対して画像処理を行い、圧縮して送ることで通信量を減らし要件の制限内で処理を行えるよう工夫しました。CAD図面AI解析による自動見積システム開発ではAI-OCRを用いた図面の解析を行い、個社に合わせた見積もりを作成できるアプリケーションを実装しました。`,
      en: `For a kimono remake simulation tool, I processed uploaded photos and compressed them before sending, reducing data transfer so that processing could stay within the project's constraints. For an automated quoting system driven by AI analysis of CAD drawings, I built an application that parses drawings with AI-OCR and generates quotes tailored to each client.`,
    },
  },
  {
    date: "2026/7 ~ NOW",
    company: { ja: "株式会社SMART GOLF", en: "SMART GOLF Inc." },
    description: {
      ja: `システム開発
                  24時間365日利用できる会員制インドアゴルフ施設『SMART GOLF』のシステム開発を行っています`,
      en: `System development
                  Developing systems for SMART GOLF, a 24/7 members-only indoor golf facility`,
    },
    detail: ``,
  },
  {
    date: "2022/4 ~ 2026/6",
    company: { ja: "Sansan株式会社", en: "Sansan, Inc." },
    description: {
      ja: `新卒入社
                  入社後セミナー管理システム Seminar One の開発に携わり、スパイクアクセス時の負荷対策を行いました その後、営業DXサービスSansanの開発に従事し、国内有数のSaaSで機能開発やアプリケーションの運用・保守を行っていました`,
      en: `Joined as a new graduate
                  After joining, I worked on the seminar management system Seminar One, handling load countermeasures for spike traffic. I then moved to the sales DX service Sansan, where I developed features and operated/maintained one of Japan's leading SaaS applications`,
    },
    detail: {
      ja: `『Seminar One』はセミナーの募集ページをホスティングしていて募集ページ公開時にはアクセスが集中し負荷によるエラーが発生していました。その状況をk6を用いた負荷テストを行い、アプリケーション・インフラ両面からチューニングを行いました。DBの読み書きを I/O completion port を利用するようにしてマルチスレッド環境での効率化を行い、さらに、ページのうち静的な要素と動的な要素を分離してキャッシュ可能にし、静的な部分はCDNを用いて配信しoriginサーバーへの負荷を削減しました。また、オートスケールのパラメーターを調整し、アプリケーション起動時のエラー数を削減しました。

『Sansan』は19年以上続くSaaSで主要データである名刺のレコード数は数億に上り、既存機能の改修や新機能の開発でもパフォーマンスを意識した開発が必要です。PosgtreSQLのオプティマイザの挙動を意識したSQLを書く必要があり、pg_hint_planを用いたチューニングも行いました。データ構造の設計段階からパフォーマンスを重視した開発を行っていました。また、メッセージングシステムを利用したマイクロサービスアーキテクチャでの開発も行い、Azure/C#→GCP/Goのクラウド環境の移行にも携わりました。`,
      en: `Seminar One hosts seminar registration pages, and whenever a page went public, traffic spikes caused load-related errors. I ran load tests with k6 and tuned both the application and the infrastructure. I switched database reads and writes to use I/O completion ports for better efficiency in a multithreaded environment, separated the static and dynamic parts of each page so the static parts could be cached and served through a CDN to reduce load on the origin, and adjusted the autoscaling parameters to cut the number of errors during application startup.

Sansan is a SaaS that has been running for over 19 years, and its core data, business-card records, numbers in the hundreds of millions, so improving existing features and building new ones both require performance-aware development. I wrote SQL with the behavior of the PostgreSQL optimizer in mind and tuned queries with pg_hint_plan, prioritizing performance from the data-structure design stage. I also worked on a microservice architecture built on a messaging system and was involved in migrating the cloud environment from Azure/C# to GCP/Go.`,
    },
  },
  {
    date: "2020/8 ~ 2022/3",
    company: { ja: "株式会社マネーフォワード", en: "Money Forward, Inc." },
    description: {
      ja: `京都開発拠点長期インターン
                  KTA(京都開発本部テクニカルアーキテクトグループ)で Go を中心技術とした性能改善を行っていました`,
      en: `Long-term intern at the Kyoto development office
                  Worked on performance improvements, mainly in Go, in KTA (Kyoto Development Division Technical Architect Group)`,
    },
    detail: {
      ja: `クラウド会計Plusの運用コスト削減に従事していました。従来はDBに保存していたバイナリデータを、定期的にS3に同期するパイプラインアーキテクチャを実装し、データの保存コストを削減しました。また、前者の開発生産性の可視化を行うためのダッシュボードを開発し、分析を支援しました。`,
      en: `I worked on reducing the operating costs of Money Forward Cloud Accounting Plus. I implemented a pipeline architecture that periodically syncs binary data, previously stored in the database, to S3, cutting storage costs. I also built a dashboard to visualize development productivity and support analysis.`,
    },
  },
  {
    date: "2019/10 ~ 2022/3",
    company: { ja: "株式会社HACARUS", en: "HACARUS Inc." },
    description: {
      ja: `長期インターン
                  機械学習を用いたプロダクトのデモWebアプリ作成や各プロジェクトの CI 整備を担っていました`,
      en: `Long-term intern
                  Built demo web apps for machine-learning products and set up CI for various projects`,
    },
    detail: {
      ja: `画像・映像データの構造を理解したスパースモデリングによる機械学習アプリケーションの開発を行っていました。心電図など連続的なデータの異常検知や医療データのアノテーションアプリケーションに携わっていました。CI/CDの整備を行うことも多く、AWSの権限管理やデプロイフローの整備を主にしていました。`,
      en: `I developed machine-learning applications based on sparse modeling that take advantage of the structure of image and video data, including anomaly detection for continuous data such as ECGs and an annotation application for medical data. I also frequently handled CI/CD, mainly AWS permission management and deployment pipelines.`,
    },
  },
  {
    date: "2021/4 ~ 2022/2",
    company: { ja: "Crosshare株式会社", en: "Crosshare Inc." },
    description: {
      ja: `業務委託開発
                  オンラインゲームにおけるフレンドマッチングに新しい体験をもたらす新サービス開発にバックエンドエンジニアとして関わっていました`,
      en: `Contract development
                  Worked as a backend engineer on a new service bringing a fresh experience to friend matching in online games`,
    },
    detail: {
      ja: `Amazon GameLift FlexMatchを用いたプレイヤーマッチングサービスの開発を行っていました。プレイヤーのランク・ゲームスタイルに合わせリアルタイムでマッチングを行い、Discordのチャットルームが自動で作成されるものです。同時実行制御やパフォーマンスを意識した開発を行っていました。`,
      en: `I built a player-matching service using Amazon GameLift FlexMatch. It matches players in real time based on their rank and play style and automatically creates a Discord chat room. I focused on concurrency control and performance.`,
    },
  },
  {
    date: "2020/9",
    company: "teamLab Inc.",
    description: {
      ja: `就業形インターン
                  EC 用 Rails フレームワーク Spree を用いた社内共通基盤の新機能開発に携わりました`,
      en: `Working internship
                  Developed new features for an internal shared platform built on Spree, a Rails e-commerce framework`,
    },
    detail: ``,
  },
  {
    date: "2020/9",
    company: { ja: "株式会社ハウテレビジョン", en: "Howtelevision, Inc." },
    description: {
      ja: `サマーインターン
                  Go を用いた自社サービスの新機能開発プログラムにバックエンドエンジニアとして参加しました`,
      en: `Summer internship
                  Joined a program developing new features for the company's services as a backend engineer using Go`,
    },
    detail: ``,
  },
  {
    date: "2020/9",
    company: { ja: "Sansan株式会社", en: "Sansan, Inc." },
    description: {
      ja: `1day インターン
                  名刺管理アプリの開発を体験するプログラムに参加しました`,
      en: `1-day internship
                  Joined a program to experience developing a business-card management app`,
    },
    detail: ``,
  },
  {
    date: "2020/8",
    company: { ja: "株式会社ブレインパッド", en: "BrainPad Inc." },
    description: {
      ja: `サマーインターン
                  自社製マッチングエンジン Conomi の魅力を伝えるデモアプリ制作を1週間で行いました`,
      en: `Summer internship
                  Built a demo app in one week to showcase Conomi, the company's in-house matching engine`,
    },
    detail: ``,
  },
  {
    date: "2020/8",
    company: { ja: "クックパッド株式会社", en: "Cookpad Inc." },
    description: {
      ja: `Online Summer Internship 2020
                  サービス開発の手法をアイデア出しの段階から形にするまで学ぶプログラムに参加し、一人暮らしの料理を楽しくするサービス開発を行いました`,
      en: `Online Summer Internship 2020
                  Joined a program covering service development from ideation to implementation, and built a service to make cooking more fun for people living alone`,
    },
    detail: ``,
  },
  {
    date: "2020/4",
    company: { ja: "クックパッド株式会社", en: "Cookpad Inc." },
    description: {
      ja: `スプリングインターン
                  Ruby on Rails を用いたパフォーマンス・チューニングのプログラムに参加しました`,
      en: `Spring internship
                  Joined a performance-tuning program using Ruby on Rails`,
    },
    detail: ``,
  },
  {
    date: "2019/9",
    company: { ja: "株式会社オプティム", en: "OPTiM Corporation" },
    description: {
      ja: `短期インターン
                  セマンティック・セグメンテーションを用い、社内で取り組んでいるプロジェクトの精度向上に関する研究を行いました`,
      en: `Short-term internship
                  Researched accuracy improvements for an internal project using semantic segmentation`,
    },
    detail: ``,
  },
  {
    date: "2019/9",
    company: { ja: "日本経済新聞社", en: "Nikkei Inc." },
    description: {
      ja: `HACK THE NIKKEI
                  日経電子版の記事データや閲覧履歴をデータ処理し、Web版での新たなサービスを提案し、実装しました`,
      en: `HACK THE NIKKEI
                  Processed article data and browsing history from the Nikkei digital edition, then proposed and implemented a new service for the web edition`,
    },
    detail: ``,
  },
];

const Career = () => {
  const classes = useStyles();
  const t = useT();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Container maxWidth="sm">
      <Box id="CAREER" mt={14}>
        &ensp;
      </Box>
      <Box mt={6}>
        <Typography
          color="textPrimary"
          variant="h3"
          component="h1"
          gutterBottom
        >
          CAREER
        </Typography>
      </Box>
      <Timeline>
        {careers.map((career, index) => (
          <TimelineItem key={career.date + t(career.company)}>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box mb={5}>
                <Typography
                  color="textSecondary"
                  variant="body1"
                  component="h1"
                  gutterBottom
                >
                  <Box className={classes.date}>{career.date}</Box>
                </Typography>
                <Typography
                  color="textPrimary"
                  variant="h6"
                  component="h1"
                  gutterBottom
                >
                  <Box fontWeight="fontWeightBold" className={classes.company}>
                    {t(career.company)}
                  </Box>
                </Typography>
                <Typography
                  color="textPrimary"
                  variant="body2"
                  component="h1"
                  gutterBottom
                  className={classes.description}
                >
                  <Box className={classes.description}>
                    {t(career.description)}
                  </Box>
                </Typography>
                {t(career.detail) && (
                  <>
                    <Box
                      className={classes.expandRow}
                      onClick={() => handleToggle(index)}
                    >
                      <IconButton
                        size="small"
                        className={
                          expandedIndex === index
                            ? classes.expandIconOpen
                            : classes.expandIcon
                        }
                      >
                        <ExpandMoreIcon fontSize="small" />
                      </IconButton>
                      <Typography className={classes.expandLabel}>
                        {expandedIndex === index
                          ? t(ui.careerClose)
                          : t(ui.careerDetail)}
                      </Typography>
                    </Box>
                    <Collapse in={expandedIndex === index}>
                      <Typography
                        color="textPrimary"
                        variant="body2"
                        component="div"
                        className={classes.detail}
                      >
                        {t(career.detail)}
                      </Typography>
                    </Collapse>
                  </>
                )}
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
};

export default Career;
