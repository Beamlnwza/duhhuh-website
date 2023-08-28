<script>
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button, buttonVariants } from '$lib/components/ui/button';
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>เพิ่มคิวใหม่</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>
				<h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
					อ่านก่อน เพิ่มคิวใหม่!
				</h4></Dialog.Title>
		</Dialog.Header>
		<div class="grid gap-4">
			<ul class=" ml-6 list-disc [&>li]:mt-2">
				<li>ต่อคิวได้ที่ล่ะคิวต่อคน</li>
				<li>ถ้ากดยืนยันแล้วจะทำให้ <b class="text-red-700">คิวที่อยู่ในระบบจะหายไป</b></li>
				<li>ได้คิวใหม่ ต่อคิวสุดท้ายในระบบ</li>
				<li>ถ้าไม่ต้องการให้ยกเลิกกด กากะบาทข้างบนได้เลย!</li>
			</ul>
		</div>
		<Dialog.Footer>
			<Button type="submit" variant="destructive">ลบเลย!</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
