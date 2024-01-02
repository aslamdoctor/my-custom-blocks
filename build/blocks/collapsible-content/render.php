<?php
$classes = 'my-custom-class';
if($attributes['isOpen']) {
	$classes .= ' open';
}
$block_wrapper_attributes = get_block_wrapper_attributes(array( 'class' => $classes ));
?>
<div <?php echo $block_wrapper_attributes; ?>>
	<?php if( $attributes['title'] ):?>
	<h2 class="collapsible-title"><?php echo $attributes['title']; ?></h2>
	<?php endif;?>

	<?php if( $content ):?>
	<div class="collapsible-content""><?php echo $content; ?></div>
	<?php endif;?>
</div>
