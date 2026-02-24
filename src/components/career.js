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
    date: "2022/4 ~ NOW",
    company: "Sansan株式会社",
    description: `新卒入社
                  入社後セミナー管理システム Seminar One の開発に携わり、スパイクアクセス時の負荷対策を行いました その後、営業DXサービスSansanの開発に従事し、国内有数のSaaSで機能開発アプリケーションの運用・保守を行っています`,
    detail: `『Seminar One』はセミナーの募集ページをホスティングしていて募集ページ公開時にはアクセスが集中し負荷によるエラーが発生していました。その状況をk6を用いた負荷テストを行い、アプリケーション・インフラ両面からチューニングを行いました。DBの読み書きを I/O completion port を利用するようにしてマルチスレッド環境での効率化を行い、さらに、ページのうち静的な要素と動的な要素を分離してキャッシュ可能にし、静的な部分はCDNを用いて配信しoriginサーバーへの負荷を削減しました。また、オートスケールのパラメーターを調整し、アプリケーション起動時のエラー数を削減しました。\n\n『Sansan』は19年以上続くSaaSで主要データである名刺のレコード数は数億に上り、既存機能の改修や新機能の開発でもパフォーマンスを意識した開発が必要です。PosgtreSQLのオプティマイザの挙動を意識したSQLを書く必要があり、pg_hint_planを用いたチューニングも行います。データ構造の設計段階からパフォーマンスを重視した開発を行っていました。また、メッセージングシステムを利用したマイクロサービスアーキテクチャでの開発も行っていて、Azure/C#→GCP/Goのクラウド環境の移行にも携わっています。`,
  },
  {
    date: "2025/6 ~ NOW",
    company: "株式会社bamboooo",
    description: `取締役
                  友人と起業し、受託開発事業を行っています。Webアプリケーション / AIアプリケーション 開発を中心に、フロントエンド・バックエンドを担当しています。`,
    detail: `着物リメイクシミュレーションツール開発ではアップロードされた写真に対して画像処理を行い、圧縮して送ることで通信量を減らし要件の制限内で処理を行えるよう工夫しました。CAD図面AI解析による自動見積システム開発ではAI-OCRを用いた図面の解析を行い、個社に合わせた見積もりを作成できるアプリケーションを実装しました。`,
  },
  {
    date: "2020/8 ~ 2022/3",
    company: "株式会社マネーフォワード",
    description: `京都開発拠点長期インターン
                  KTA(京都開発本部テクニカルアーキテクトグループ)で Go を中心技術とした性能改善を行っていました`,
    detail: `クラウド会計Plusの運用コスト削減に従事していました。従来はDBに保存していたバイナリデータを、定期的にS3に同期するパイプラインアーキテクチャを実装し、データの保存コストを削減しました。また、前者の開発生産性の可視化を行うためのダッシュボードを開発し、分析を支援しました。`,
  },
  {
    date: "2019/10 ~ 2022/3",
    company: "株式会社HACARUS",
    description: `長期インターン
                  機械学習を用いたプロダクトのデモWebアプリ作成や各プロジェクトの CI 整備を担っていました`,
    detail: `画像・映像データの構造を理解したスパースモデリングによる機械学習アプリケーションの開発を行っていました。心電図など連続的なデータの異常検知や医療データのアノテーションアプリケーションに携わっていました。CI/CDの整備を行うことも多く、AWSの権限管理やデプロイフローの整備を主にしていました。`,
  },
  {
    date: "2021/4 ~ 2022/2",
    company: "Crosshare株式会社",
    description: `業務委託開発
                  オンラインゲームにおけるフレンドマッチングに新しい体験をもたらす新サービス開発にバックエンドエンジニアとして関わっていました`,
    detail: `Amazon GameLift FlexMatchを用いたプレイヤーマッチングサービスの開発を行っていました。プレイヤーのランク・ゲームスタイルに合わせリアルタイムでマッチングを行い、Discordのチャットルームが自動で作成されるものです。同時実行制御やパフォーマンスを意識した開発を行っていました。`,
  },
  {
    date: "2020/9",
    company: "teamLab Inc.",
    description: `就業形インターン
                  EC 用 Rails フレームワーク Spree を用いた社内共通基盤の新機能開発に携わりました`,
    detail: ``,
  },
  {
    date: "2020/9",
    company: "株式会社ハウテレビジョン",
    description: `サマーインターン
                  Go を用いた自社サービスの新機能開発プログラムにバックエンドエンジニアとして参加しました`,
    detail: ``,
  },
  {
    date: "2020/9",
    company: "Sansan株式会社",
    description: `1day インターン
                  名刺管理アプリの開発を体験するプログラムに参加しました`,
    detail: ``,
  },
  {
    date: "2020/8",
    company: "株式会社ブレインパッド",
    description: `サマーインターン
                  自社製マッチングエンジン Conomi の魅力を伝えるデモアプリ制作を1週間で行いました`,
    detail: ``,
  },
  {
    date: "2020/8",
    company: "クックパッド株式会社",
    description: `Online Summer Internship 2020
                  サービス開発の手法をアイデア出しの段階から形にするまで学ぶプログラムに参加し、一人暮らしの料理を楽しくするサービス開発を行いました`,
    detail: ``,
  },
  {
    date: "2020/4",
    company: "クックパッド株式会社",
    description: `スプリングインターン
                  Ruby on Rails を用いたパフォーマンス・チューニングのプログラムに参加しました`,
    detail: ``,
  },
  {
    date: "2019/9",
    company: "株式会社オプティム",
    description: `短期インターン
                  セマンティック・セグメンテーションを用い、社内で取り組んでいるプロジェクトの精度向上に関する研究を行いました`,
    detail: ``,
  },
  {
    date: "2019/9",
    company: "日本経済新聞社",
    description: `HACK THE NIKKEI
                  日経電子版の記事データや閲覧履歴をデータ処理し、Web版での新たなサービスを提案し、実装しました`,
    detail: ``,
  },
];

const Career = () => {
  const classes = useStyles();
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
          <TimelineItem key={career.description}>
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
                    {career.company}
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
                    {career.description}
                  </Box>
                </Typography>
                {career.detail && (
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
                        {expandedIndex === index ? "閉じる" : "詳細"}
                      </Typography>
                    </Box>
                    <Collapse in={expandedIndex === index}>
                      <Typography
                        color="textPrimary"
                        variant="body2"
                        component="div"
                        className={classes.detail}
                      >
                        {career.detail}
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
