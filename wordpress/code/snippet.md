## WPに必要なコード
```php
<html <?php language_attributes(); ?>>
<body <?php body_class(); ?>>

// headタグ終了直前
<?php wp_head(); ?>

// bodyタグ終了直前
<?php wp_footer(); ?>
```

## pathを取得
```php
<?= get_template_directory_uri(); ?>
```

## header,footerを取得
meta情報やscriptタグ(非表示部分)
```php
<head>
  <?php get_header(); ?>
</head>
```

## patrsを取得
ページ共通部品(表示部分)
```php
<?php get_template_part('includes/header'); ?>
```

## 記事一覧の取得
```php
<?php if (have_posts()) : ?>
  <?php while (have_posts()) : the_post(); ?>
    <div class="post-preview">
      <a href="<?php the_permalink() ?>">
        <h2 class="post-title">
          <?php the_title(); ?>
        </h2>
        <h3 class="post-subtitle">
          <?php the_excerpt(); ?>
        </h3>
      </a>
      <p class="post-meta">Posted by
        <?php the_author() ?>
        on <?php the_time('Y/m/d'); ?></p>
    </div>
    <hr>
  <?php endwhile; ?>
  ・
  ・
  ・
<?php endif: ?>
```
## アイキャッチがなければデフォルトを表示する
```php
/* アイキャッチ画像がなければ標準画像を取得する */
function get_eyecathc_with_default() {
  if (has_post_thumbnail()) {
    $id = get_post_thumbnail_id();
    $img = wp_get_attachment_image_src($id, 'large');
  } else {
    $img = [get_template_directory_uri() . '/img/post-bg.jpg'];
  }
  return $img;
}
```
## ページネーション
```php
<?php 
$link = get_previous_posts_link('&larr; 新しい記事へ');
if ($link) {
  $link = str_replace('<a', '<a class="btn btn-primary float-left"', $link);
  echo $link;
}
?>

<?php 
$link = get_next_posts_link('古い記事へ &rarr;');
if ($link) {
  $link = str_replace('<a', '<a class="btn btn-primary float-right"', $link);
  echo $link;
}
?>
```
