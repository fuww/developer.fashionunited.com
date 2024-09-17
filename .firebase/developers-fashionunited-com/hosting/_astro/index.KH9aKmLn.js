"use strict";(()=>{var X=`<head>
	<meta name="vtbag-inspection-chamber" content="true" />
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" />
	<title></title>
	<meta name="astro-view-transitions-enabled" content="true" />
</head>
<body>
	<canvas id="canvas"></canvas> <iframe id="vtbag-main-frame" src="/"></iframe>
	<div id="divider" class="divider"></div>

	<button id="vtbag-ui-control-play">
		<img
			style="transform: scale(1.5)"
			src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzYgMzYiPjxwYXRoIGZpbGw9ImRhcmtnb2xkZW5yb2QiIGQ9Ik0zMCA0SDZhMiAyIDAgMCAwLTIgMnYyNGEyIDIgMCAwIDAgMiAyaDI0YTIgMiAwIDAgMCAyLTJWNmEyIDIgMCAwIDAtMi0yTTIwIDdoMnYzaC0yWm0tNiAwaDJ2M2gtMlptLTQgMjJIOHYtM2gyWm0wLTE5SDhWN2gyWm02IDE5aC0ydi0zaDJabTYgMGgtMnYtM2gyWm0zLjE2LTEwLjE2bC05Ljc3IDQuMzZhMSAxIDAgMCAxLTEuMzktLjkydi04LjcxYTEgMSAwIDAgMSAxLjQxLS45MUwyNS4xNiAxN2ExIDEgMCAwIDEgMCAxLjg0TTI4IDI5aC0ydi0zaDJabTAtMTloLTJWN2gyWiIgY2xhc3M9ImNsci1pLXNvbGlkIGNsci1pLXNvbGlkLXBhdGgtMSIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMzZ2MzZIMHoiLz48L3N2Zz4=
"
		/>
	</button>
	<div id="vtbag-ui-panel">
		<div id="vtbag-ui-messages" style="view-transition-name: vtbag-div-messages">
			<h4>You are &hellip;</h4>
			<p>&hellip; in the <b>Inspection Chamber</b> deep down at the bottom of <b>The Bag!</b></p>
			<p>
				<b>Select a mode</b> from <code>Bypass</code> (= no interception), <code>Slow Motion</code>,
				<code>Full Control</code> or <code>Side-by-side Comparison</code>.
			</p>
			<p>
				<b>Examine</b> the defined transitions by clicking on the names or select the "Frame
				elements" toggle. Then <b>navigate</b> by clicking a link on your page.
			</p>
			<p>
				Selecting an element with a view transition name copies its selector to the clipboard, ready
				for pasting into the console of the browser's Developer tools.
			</p>
			<p>
				Active view transitions show an
				<span style="color: darkgoldenrod"
					>indicator (<img
						style="transform: translateY(0.4em)"
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzYgMzYiPjxwYXRoIGZpbGw9ImRhcmtnb2xkZW5yb2QiIGQ9Ik0zMCA0SDZhMiAyIDAgMCAwLTIgMnYyNGEyIDIgMCAwIDAgMiAyaDI0YTIgMiAwIDAgMCAyLTJWNmEyIDIgMCAwIDAtMi0yTTIwIDdoMnYzaC0yWm0tNiAwaDJ2M2gtMlptLTQgMjJIOHYtM2gyWm0wLTE5SDhWN2gyWm02IDE5aC0ydi0zaDJabTYgMGgtMnYtM2gyWm0zLjE2LTEwLjE2bC05Ljc3IDQuMzZhMSAxIDAgMCAxLTEuMzktLjkydi04LjcxYTEgMSAwIDAgMSAxLjQxLS45MUwyNS4xNiAxN2ExIDEgMCAwIDEgMCAxLjg0TTI4IDI5aC0ydi0zaDJabTAtMTloLTJWN2gyWiIgY2xhc3M9ImNsci1pLXNvbGlkIGNsci1pLXNvbGlkLXBhdGgtMSIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMzZ2MzZIMHoiLz48L3N2Zz4=
"
					/>)</span
				>
				in the top left corner of the viewport. Clicking it ends the transition.
			</p>
			<p>
				View transitions are also canceled when the
				<a href="https://github.com/w3c/csswg-drafts/issues/8045">size or orientation</a> of the
				window changes.
			</p>
			<p style="margin-bottom: 0">You can resize this panel by dragging the border.</p>
		</div>
		<div id="vtbag-ui-modi" style="view-transition-name: vtbag-div-modi">
			<h4>Select Mode:</h4>
			<ul>
				<li>
					<input type="radio" name="vtbag-m-rg" id="vtbag-m-bypass" /><label for="vtbag-m-bypass"
						><span style="display: inline-block; width: 7em; padding-left: 0.7em"> Bypass</span
						><img
							style="transform: scale(1.5) translateY(1px)"
							src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxkZWZzPjxzeW1ib2wgaWQ9ImxpbmVNZENvZ09mZkxvb3AwIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xNS4yNCA2LjM3QzE1LjY1IDYuNiAxNi4wNCA2Ljg4IDE2LjM4IDcuMkMxNi42IDcuNCAxNi44IDcuNjEgMTYuOTkgNy44M0MxNy40NiA4LjQgMTcuODUgOS4wNSAxOC4xMSA5Ljc3QzE4LjIgMTAuMDMgMTguMjggMTAuMzEgMTguMzUgMTAuNTlDMTguNDUgMTEuMDQgMTguNSAxMS41MiAxOC41IDEyIj48YW5pbWF0ZSBmaWxsPSJmcmVlemUiIGF0dHJpYnV0ZU5hbWU9ImQiIGJlZ2luPSIwLjhzIiBkdXI9IjAuMnMiIHZhbHVlcz0iTTE1LjI0IDYuMzdDMTUuNjUgNi42IDE2LjA0IDYuODggMTYuMzggNy4yQzE2LjYgNy40IDE2LjggNy42MSAxNi45OSA3LjgzQzE3LjQ2IDguNCAxNy44NSA5LjA1IDE4LjExIDkuNzdDMTguMiAxMC4wMyAxOC4yOCAxMC4zMSAxOC4zNSAxMC41OUMxOC40NSAxMS4wNCAxOC41IDExLjUyIDE4LjUgMTI7TTE1LjI0IDYuMzdDMTUuNjUgNi42IDE2LjA0IDYuODggMTYuMzggNy4yQzE2LjM4IDcuMiAxOSA2LjEyIDE5LjAxIDYuMTRDMTkuMDEgNi4xNCAyMC41NyA4Ljg0IDIwLjU3IDguODRDMjAuNTggOC44NyAxOC4zNSAxMC41OSAxOC4zNSAxMC41OUMxOC40NSAxMS4wNCAxOC41IDExLjUyIDE4LjUgMTIiLz48L3BhdGg+PC9zeW1ib2w+PG1hc2sgaWQ9ImxpbmVNZENvZ09mZkxvb3AxIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiI+PGcgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBzdHJva2UtZGFzaGFycmF5PSI0MiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjQyIiBkPSJNMTIgNS41QzE1LjU5IDUuNSAxOC41IDguNDEgMTguNSAxMkMxOC41IDE1LjU5IDE1LjU5IDE4LjUgMTIgMTguNUM4LjQxIDE4LjUgNS41IDE1LjU5IDUuNSAxMkM1LjUgOC40MSA4LjQxIDUuNSAxMiA1LjV6IiBvcGFjaXR5PSIwIj48YW5pbWF0ZSBmaWxsPSJmcmVlemUiIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiBiZWdpbj0iMC4ycyIgZHVyPSIwLjVzIiB2YWx1ZXM9IjQyOzAiLz48c2V0IGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGJlZ2luPSIwLjJzIiB0bz0iMSIvPjxzZXQgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgYmVnaW49IjAuN3MiIHRvPSIwIi8+PC9wYXRoPjxwYXRoIHN0cm9rZS1kYXNoYXJyYXk9IjIwIiBzdHJva2UtZGFzaG9mZnNldD0iMjAiIGQ9Ik0xMiA5QzEzLjY2IDkgMTUgMTAuMzQgMTUgMTJDMTUgMTMuNjYgMTMuNjYgMTUgMTIgMTVDMTAuMzQgMTUgOSAxMy42NiA5IDEyQzkgMTAuMzQgMTAuMzQgOSAxMiA5eiI+PGFuaW1hdGUgZmlsbD0iZnJlZXplIiBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaG9mZnNldCIgZHVyPSIwLjJzIiB2YWx1ZXM9IjIwOzAiLz48L3BhdGg+PC9nPjxnIG9wYWNpdHk9IjAiPjx1c2UgaHJlZj0iI2xpbmVNZENvZ09mZkxvb3AwIi8+PHVzZSBocmVmPSIjbGluZU1kQ29nT2ZmTG9vcDAiIHRyYW5zZm9ybT0icm90YXRlKDYwIDEyIDEyKSIvPjx1c2UgaHJlZj0iI2xpbmVNZENvZ09mZkxvb3AwIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjAgMTIgMTIpIi8+PHVzZSBocmVmPSIjbGluZU1kQ29nT2ZmTG9vcDAiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxMiAxMikiLz48dXNlIGhyZWY9IiNsaW5lTWRDb2dPZmZMb29wMCIgdHJhbnNmb3JtPSJyb3RhdGUoMjQwIDEyIDEyKSIvPjx1c2UgaHJlZj0iI2xpbmVNZENvZ09mZkxvb3AwIiB0cmFuc2Zvcm09InJvdGF0ZSgzMDAgMTIgMTIpIi8+PHNldCBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBiZWdpbj0iMC43cyIgdG89IjEiLz48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGR1cj0iMzBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdHlwZT0icm90YXRlIiB2YWx1ZXM9IjAgMTIgMTI7MzYwIDEyIDEyIi8+PC9nPjwvZz48ZyBmaWxsPSJub25lIiBzdHJva2UtZGFzaGFycmF5PSIyNiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTIgMTIpIj48cGF0aCBzdHJva2U9IiMwMDAiIGQ9Ik0wIDExaDI0Ii8+PHBhdGggc3Ryb2tlPSIjZmZmIiBkPSJNMCAxM2gyNCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZCIgZHVyPSI2cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iTS0xIDEzaDI0O00xIDEzaDI0O00tMSAxM2gyNCIvPjwvcGF0aD48YW5pbWF0ZSBmaWxsPSJmcmVlemUiIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiBiZWdpbj0iMS4xcyIgZHVyPSIwLjJzIiB2YWx1ZXM9IjI2OzAiLz48L2c+PC9tYXNrPjwvZGVmcz48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiM4ODgiIG1hc2s9InVybCgjbGluZU1kQ29nT2ZmTG9vcDEpIi8+PC9zdmc+
"
					/></label>
				</li>
				<li>
					<input type="radio" name="vtbag-m-rg" id="vtbag-m-slow-motion" /><label
						for="vtbag-m-slow-motion"
						><span style="display: inline-block; width: 7em; padding-left: 0.7em"> Slow Motion</span
						><img
							style="transform: scale(1.5)"
							src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iIzg4OCIgZD0iTTQyNS41IDc0LjMxM2MtOC44OTUgMC0xNi4zNSA2LjIxLTE4LjI1IDE0LjUzYy04LjU5MyAzLjctMTUuMTk1IDEwLjYxNy0xOS4wMyAxOC44MTNjLTUuMjU0IDExLjIyMy02Ljg0OCAyNC42NDgtNy4xNTggMzkuMzEzYy0uNTI1IDI0LjkwNCAyLjk5IDUzLjczIDQuNTMyIDc5LjAzYy0xLjc4MiAxNC42NjYtNC44NjcgMjguNTE4LTkuMDYzIDQxLjQwNmMyLjg0IDE3LjkzNCAzLjM5IDM2LjQ4Ny45NCA1NS4xODhjLTUuMDE3IDM4LjI4Ni0zNi41MiA2MS4xMzQtNzAuMjIgNjcuOTM3Yy0zMS4wNDggNi4yNy02NS4zMTIuNDItODcuNjU2LTE5LjQwNWMtMzQuNzUyIDIyLjYxLTc2LjY0NiAyOC41NzgtMTEyLjQwNiAxNi41OTRjLTQyLjA0OCAxNi4yNDgtNzQuNTMgMzguODI2LTg3LjYyNiA2MS40MzZIMzQxLjI1YzEwMy4xMDUgMCAxMzcuOTUyLTEwNy44ODggMTExLjQwNi0yMjUuNTNjLS4wMTguMDIzLS4wNDQuMDM4LS4wNjIuMDZjLTUuNzEtNDAuODUzLjk4LTcwLjQ1IDE0LjkwNi04OC45MDVhMTguNiAxOC42IDAgMCAwIDYuMjUgMS4wOTVjMTAuMzMzIDAgMTguNjg4LTguMzg2IDE4LjY4OC0xOC43MmMwLTEwLjMzMi04LjM1NS0xOC43MTgtMTguNjg4LTE4LjcxOHMtMTguNzIgOC4zODYtMTguNzIgMTguNzJjMCAxLjAxNy4wOTUgMS45OTQuMjUgMi45NjhjLTIxLjI0MiAyNS4xNjUtMjguODU0IDY1LjcwOC0xOS4yNSAxMTcuOTA2Yy0xMC4yOTYgNC44MzYtMjEuMTUyIDIuODc4LTMxLjQzNi02Ljc1Yy0xLjI4Ni0yOC4wMDItNS4zNjQtNTkuMjctNC44NDQtODMuOTA1Yy4yODMtMTMuNDA1IDIuMDctMjQuNzIgNS4zNzUtMzEuNzhjMi4xLTQuNDkgNC4yMjItNy4zNDQgNy40Ny05LjAzMmMzLjM1NSAzLjE5NiA3LjkwNCA1LjE4NyAxMi45MDUgNS4xODdjMTAuMzMzIDAgMTguNjg4LTguMzg2IDE4LjY4OC0xOC43MmMwLTEwLjMzMi04LjM1NS0xOC43MTgtMTguNjg4LTE4LjcxOE0xOTMuMzQ0IDEwNi4yNWMtMi4xOTYtLjAxLTQuMzk4LjAzNi02LjU5NC4xMjVjLTM1LjE0MyAxLjQyLTcwLjE0MiAxNS40NzUtOTkuMDYzIDQxLjI1Yy01Ni43MyA1MC41NTgtNTkuNDMgMTQ0LjU5LTkuMTg3IDIwMS4xMjVjMzguNjQ4IDM4LjMgMTA2Ljg1NiAzNC43OSAxNTEuNS05Ljg0NGMzNy43MTItMzcuNjEgNDAuNjEtOTQuOTc3IDguNzgtMTI3Yy0yMi4xLTIyLjIzLTYwLjk5Ni0yNC44MTctODUuODQzIDEuMTg4Yy01LjUzNCA1Ljc5LTguOTggMTYuMDItOC45MDYgMjYuOTA2Yy4wNzYgMTAuODg3IDMuNjUzIDIyLjAwMyA5LjUzMiAyOS4wNjNjMy41OTMgNC4zMTMgMTAuNjI1IDguNDc2IDE4LjUgMTAuNDY4YzQuNjg3IDEuMTg3IDkuNTk2IDEuNTggMTQuMDk0IDEuMjVjMTMuMTk1LS4yMjggMjYuMTU2LTkuMDEgMjYuMTU2LTI2LjYyNGMwLTE1LjcyLTEwLjMzMi0yNC40MjgtMjEuOTM3LTI2LjI4YzcuNzczLS42OTcgMTQuNzgzLjYxOCAyMC41OTQgMy44MWM4LjUxIDQuNjc4IDEzLjY5IDEyLjk0NCAxNS40NjggMjEuNTMzYzMuNTIgMTYuOTk1LTUuNDc4IDM3LjEyNS0yNS40MDcgNDMuMzQzbC4wMzIuMDYyYy0uMTYyLjA2LS4zMzcuMDY3LS41LjEyNWMtLjA0Ni4wMTQtLjA3OC4wNS0uMTI1LjA2M2MtMTAuNTcyIDMuNzUzLTIyLjIwMiAzLjU2Ny0zMi45NjguODQzYy0xMC45NzctMi43NzYtMjEuMjM4LTguMTY3LTI4LjI4Mi0xNi42MjVjLTkuNDE4LTExLjMwNi0xMy43NDQtMjYuMjIyLTEzLjg0NC00MC44NzRzNC4wMS0yOS40NTMgMTQuMDYyLTM5Ljk3YzMyLjAzLTMzLjUyIDgzLjI2My0zMSAxMTIuNjI1LTEuNDY3YzM5Ljk4IDQwLjIyIDM1LjI4MiAxMDkuMzUyLTguODQzIDE1My4zNzR2LjAzYy0yLjYyNyAyLjYyNy01LjM4NCA1LjA1Ni04LjE1NiA3LjQzOGMxNy4wMTcgMTIuNyA0NC4wMjIgMTcuNjA1IDY4LjUzMiAxMi42NTdjMjguMjU2LTUuNzA2IDUxLjUyNC0yMi42NjcgNTUuMzc1LTUyLjA2NGM5LjQ5Mi03Mi40NTUtMzQuMjE1LTE0Ny4zNDItNzIuMjUtMTc5LjI1Yy0yNy42NjMtMjMuMjEtNjAuNDAyLTM0LjUwNi05My4zNDMtMzQuNjU2eiIvPjwvc3ZnPg==
"
					/></label>
				</li>
				<li>
					<input type="radio" name="vtbag-m-rg" id="vtbag-m-control" /><label for="vtbag-m-control"
						><span style="display: inline-block; width: 6.7em; padding-left: 0.7em">
							Full Control</span
						>
						<img
							class="horizontal"
							style="transform: scale(1.5)"
							src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGZpbGw9IiM4ODgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjUgMWEuNS41IDAgMCAxIC41LjV2NGEuNS41IDAgMCAxLTEgMFY0SDEuNWEuNS41IDAgMCAxIDAtMUgxMFYxLjVhLjUuNSAwIDAgMSAuNS0uNU0xMiAzLjVhLjUuNSAwIDAgMSAuNS0uNWgyYS41LjUgMCAwIDEgMCAxaC0yYS41LjUgMCAwIDEtLjUtLjVtLTYuNSAyQS41LjUgMCAwIDEgNiA2djEuNWg4LjVhLjUuNSAwIDAgMSAwIDFINlYxMGEuNS41IDAgMCAxLTEgMFY2YS41LjUgMCAwIDEgLjUtLjVNMSA4YS41LjUgMCAwIDEgLjUtLjVoMmEuNS41IDAgMCAxIDAgMWgtMkEuNS41IDAgMCAxIDEgOG05LjUgMmEuNS41IDAgMCAxIC41LjV2NGEuNS41IDAgMCAxLTEgMFYxM0gxLjVhLjUuNSAwIDAgMSAwLTFIMTB2LTEuNWEuNS41IDAgMCAxIC41LS41bTEuNSAyLjVhLjUuNSAwIDAgMSAuNS0uNWgyYS41LjUgMCAwIDEgMCAxaC0yYS41LjUgMCAwIDEtLjUtLjUiLz48L3N2Zz4=
" /><img
							class="vertical"
							style="transform: scale(1.5)"
							src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGZpbGw9IiM4ODgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMTAuNWEuNS41IDAgMCAwIC41LjVoNGEuNS41IDAgMCAwIDAtMUgzVjEuNWEuNS41IDAgMCAwLTEgMFYxMEguNWEuNS41IDAgMCAwLS41LjVNMi41IDEyYS41LjUgMCAwIDAtLjUuNXYyYS41LjUgMCAwIDAgMSAwdi0yYS41LjUgMCAwIDAtLjUtLjVtMy02LjVBLjUuNSAwIDAgMCA2IDZoMS41djguNWEuNS41IDAgMCAwIDEgMFY2SDEwYS41LjUgMCAwIDAgMC0xSDZhLjUuNSAwIDAgMC0uNS41TTggMWEuNS41IDAgMCAwLS41LjV2MmEuNS41IDAgMCAwIDEgMHYtMkEuNS41IDAgMCAwIDggMW0zIDkuNWEuNS41IDAgMCAwIC41LjVoNGEuNS41IDAgMCAwIDAtMUgxNFYxLjVhLjUuNSAwIDAgMC0xIDBWMTBoLTEuNWEuNS41IDAgMCAwLS41LjVtMi41IDEuNWEuNS41IDAgMCAwLS41LjV2MmEuNS41IDAgMCAwIDEgMHYtMmEuNS41IDAgMCAwLS41LS41Ii8+PC9zdmc+
"
					/></label>
				</li>
				<li>
					<input disabled type="radio" name="vtbag-m-rg" id="vtbag-m-compare" /><label
						for="vtbag-m-compare"
						><span
							title="Coming soon!"
							style="color: #888; display: inline-block; width: 7em; padding-left: 0.7em"
						>
							Side-by-side</span
						><img
							style="transform: scale(1.5)"
							src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg4OCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0zIDcuNFYzLjZhLjYuNiAwIDAgMSAuNi0uNmg1LjhhLjYuNiAwIDAgMSAuNi42djMuOGEuNi42IDAgMCAxLS42LjZIMy42YS42LjYgMCAwIDEtLjYtLjZabTExIDEzdi0zLjhhLjYuNiAwIDAgMSAuNi0uNmg1LjhhLjYuNiAwIDAgMSAuNi42djMuOGEuNi42IDAgMCAxLS42LjZoLTUuOGEuNi42IDAgMCAxLS42LS42Wm0wLThWMy42YS42LjYgMCAwIDEgLjYtLjZoNS44YS42LjYgMCAwIDEgLjYuNnY4LjhhLjYuNiAwIDAgMS0uNi42aC01LjhhLjYuNiAwIDAgMS0uNi0uNlptLTExIDh2LTguOGEuNi42IDAgMCAxIC42LS42aDUuOGEuNi42IDAgMCAxIC42LjZ2OC44YS42LjYgMCAwIDEtLjYuNkgzLjZhLjYuNiAwIDAgMS0uNi0uNloiLz48L3N2Zz4=
"
					/></label>
				</li>
			</ul>
		</div>
		<div id="vtbag-ui-slow-motion" style="view-transition-name: vtbag-div-slo-mo">
			<h4>Slow Motion:<span id="vtbag-ui-slo-mo-progress"></span></h4>
			<label for="vtbag-ui-slo-mo">Time stretch Factor: <span id="vtbag-ui-tsf">10.0</span></label
			><br />
			<input
				id="vtbag-ui-slo-mo"
				data-vtbag-slow-motion="1.0"
				type="range"
				min="264"
				max="852"
				value="692"
			/>
			<div style="view-transition-name: vtbag-checkbox-styled">
				<input id="vtbag-ui-framed" type="checkbox" />
				<label for="vtbag-ui-framed">Frame elements</label><br />
				<input id="vtbag-ui-named-only" type="checkbox" />
				<label
					for="vtbag-ui-named-only"
					title="When selected, only elements with a view transition name &#10;can be clicked for identification or to start a view transition.&#10;This is helpful if named elements are hidden beneath others."
					>Named elements only</label
				>
			</div>
		</div>
		<div id="vtbag-ui-control" style="view-transition-name: vtbag-div-control">
			<h4>Full Control:</h4>
			<p id="vtbag-ui-control-hint">Start a transition to activate</p>
			<p id="vtbag-ui-control-hint2">Select animations, then &hellip;</p>
			<label for="vtbag-ui-controller2">Unselected: </label
			><span id="vtbag-ui-progress2">0</span> ms<br />
			<input type="range" id="vtbag-ui-controller2" min="0" max="100" value="0" />
			<div style="display: flex; justify-content: space-between; transform: translateY(-10px)">
				<span>0</span><span id="vtbag-ui-controller-max">100%</span>
			</div>
			<label for="vtbag-ui-controller">Selected:</label>
			<span id="vtbag-ui-progress">0</span> ms<br />
			<input type="range" id="vtbag-ui-controller" min="0" max="100" value="0" />
			<button id="vtbag-ui-control-exit">Exit</button>
		</div>

		<div
			title="Select names&#10;(During transition:&#10;Click colored patches to hides images)"
			id="vtbag-ui-names"
			style="view-transition-name: vtbag-div-names"
		>
			<h4>Elements w/ View Transition Names</h4>
			<div style="display: none; justify-content: space-between">
				<span id="vtbag-ui-names-old" class="button">old</span
				><span
					><input id="vtbag-ui-visible-only" type="checkbox" checked /><label
						for="vtbag-ui-visible-only"
						>in viewport</label
					></span
				><span id="vtbag-ui-names-new" class="button">new</span>
			</div>
			<ol>
				<li>Name 1</li>
			</ol>
			<button title="Reset selection">Reset</button>
		</div>

		<div id="vtbag-ui-animations" style="view-transition-name: vtbag-div-animations"></div>
		<div id="vtbag-ui-filter" style="view-transition-name: vtbag-div-filter">
			<h4>Filter Names:</h4>
			<ul>
				<li>
					<input type="radio" name="vtbag-c-rg" id="vtbag-c-all" checked /><label for="vtbag-c-all"
						><span style="color: var(--vtbag-background-accent)">\u2588</span
						><span style="color: var(--vtbag-background-accent)">\u2588</span> Show all names</label
					>
				</li>
				<li>
					<input type="radio" name="vtbag-c-rg" id="vtbag-c-old" /><label for="vtbag-c-old"
						><span style="color: darkslateblue">\u2588</span
						><span style="color: var(--vtbag-background-accent)">\u2588</span> On old page</label
					>
				</li>
				<li>
					<input type="radio" name="vtbag-c-rg" id="vtbag-c-new" /><label for="vtbag-c-new"
						><span style="color: var(--vtbag-background-accent)">\u2588</span
						><span style="color: darkolivegreen">\u2588</span> On new page</label
					>
				</li>
				<li>
					<input type="radio" name="vtbag-c-rg" id="vtbag-c-old-only" /><label
						for="vtbag-c-old-only"
						><span style="color: darkslateblue">\u2588</span
						><span style="color: transparent">\u2588</span> Only on old page</label
					>
				</li>
				<li>
					<input type="radio" name="vtbag-c-rg" id="vtbag-c-new-only" /><label
						for="vtbag-c-new-only"
						><span style="color: transparent">\u2588</span
						><span style="color: darkolivegreen">\u2588</span> Only on new page</label
					>
				</li>
				<li>
					<input type="radio" name="vtbag-c-rg" id="vtbag-c-both" /><label for="vtbag-c-both"
						><span style="color: darkslateblue">\u2588</span
						><span style="color: darkolivegreen">\u2588</span> On both pages</label
					>
				</li>
			</ul>
			<form style="view-transition-name: narrow">
				<label for="narrow">Narrow to:</label><br /><input
					id="narrow"
					type="text"
					placeholder="Fragment"
				/>
			</form>
			<button title="Reset filters">Reset</button>
		</div>
		<div id="vtbag-ui-info" style="view-transition-name: vtbag-div-info"></div>
	</div>
	<button
		id="vtbag-ui-light-dark"
		style="view-transition-name: vtbag-button-mode"
		title="Switch light/dark mode"
	>
		\u25D1
	</button>
	<button
		id="vtbag-ui-turn"
		title="Switch panel orientation
(also cancels view transitions)"
		style="view-transition-name: vtbag-button-turn"
	>
		\u292A
	</button>
	<button id="vtbag-ui-standby" title="Standby" style="view-transition-name: vtbag-button-standby">
		\u{1F5D5}
	</button>

	<div
		id="vtbag-ui-inner-panel"
		style="
			display: none;
			position: fixed;
			left: 25vw;
			top: 25vh;
			width: 50vw;
			height: 50vh;
			background-color: #0000;
			padding: 0.5em;
			scrollbar-gutter: unset;
		"
	>
		<div
			id="vtbag-ui-move"
			style="
				width: 100%;
				height: 1ex;
				background-image: repeating-linear-gradient(180deg, #aaa, #0000 2px, #666 2px, #0000 4px);
				cursor: move;
			"
		></div>
		<div style="width: calc(100% - 2ex); height: 3ex; position: absolute; left: 1ex">
			<input type="range" id="vtbag-ui-opacity" style="height: 1ex; width:calc(100% - 5ex); padding: 0; margin: 0" value="97" min="20" />
		</div>
		<div
			id="vtbag-ui-resize"
			style="
				width: 20px;
				height: 3ex;
				background-image: repeating-linear-gradient(
					-35deg,
					#aaa,
					#0000 20px,
					#666 20px,
					#0000 40px
				);
				position: absolute;
				right: 1ex;
				cursor: nwse-resize;
			"
		></div>
	</div>

	<style>
		#vtbag-ui-inner-panel,
		#vtbag-ui-panel,
		#vtbag-ui-inner-panel *,
		#vtbag-ui-panel :where(*, ::before, ::after) {
			box-sizing: border-box;
		}
		#vtbag-ui-panel
			:where(
				article,
				aside,
				details,
				figcaption,
				figure,
				footer,
				header,
				hgroup,
				main,
				menu,
				nav,
				section
			) {
			display: block;
		}
		#vtbag-ui-inner-panel
			:where(
				article,
				aside,
				details,
				figcaption,
				figure,
				footer,
				header,
				hgroup,
				main,
				menu,
				nav,
				section
			) {
			display: block;
		}

		img {
			display: inline-block;
			border-style: none;
		}
		button {
			padding-left: 6px;
			padding-right: 6px;
		}
		#vtbag-ui-inner-panel,
		#vtbag-ui-panel {
			--vtbag-name-border-width: 20px;
		}
		#vtbag-ui-panel ~ button {
			border-radius: 6px;
			border: 0;
			margin: 0;
			position: fixed;
			color: white;
			background-color: darkolivegreen;
		}
		.button {
			border: 1px solid #888;
			border-radius: 5px;
			padding: 0.25rem;
			cursor: pointer;
		}
		:root.vtbag-vt-active #vtbag-ui-panel ~ #vtbag-ui-turn {
			background-color: darkgoldenrod;
		}
		#vtbag-ui-standby {
			padding-bottom: 4pt;
			cursor: pointer;
			right: 11px;
		}
		#vtbag-ui-panel ~ #vtbag-ui-standby {
			background-color: darkgoldenrod;
		}

		#vtbag-ui-turn {
			padding-top: 4pt;
			padding-bottom: 2pt;
			cursor: pointer;
			right: 40px;
			color: white;
		}

		#vtbag-ui-light-dark {
			padding-top: 4pt;
			padding-bottom: 2pt;
			cursor: pointer;
			right: 67px;
			color: white;
		}
		:root.vtbag-ui-tl:not(.vtbag-ui-column) #vtbag-ui-panel ~ button {
			bottom: calc(100vh - var(--vtbag-panel-height) - 6px);
		}
		:root.vtbag-ui-tl.vtbag-ui-column #vtbag-ui-standby {
			right: calc(100vw - var(--vtbag-panel-width) - 11px);
		}
		:root.vtbag-ui-tl.vtbag-ui-column #vtbag-ui-turn {
			right: calc(100vw - var(--vtbag-panel-width) + 18px);
		}
		:root.vtbag-ui-tl.vtbag-ui-column #vtbag-ui-light-dark {
			right: calc(100vw - var(--vtbag-panel-width) + 45px);
		}

		#vtbag-ui-panel > div > h4 {
			cursor: zoom-in;
		}
		#vtbag-ui-inner-panel > div > h4 {
			cursor: zoom-out;
		}
		#vtbag-ui-inner-panel > div {
			padding: 6px;
			margin: 0px;
			border: 1px solid #888;
		}
		#vtbag-ui-inner-panel > div:nth-of-type(2) {
			padding: 8px;
			min-width: 100%;
			min-height: calc(100% - 6ex);
		}
		#vtbag-ui-opacity {
			transform: translate(8px, -5px);
			accent-color: #888888;
		}
		#vtbag-ui-panel > div {
			padding: 8px;
			margin: 4px;
			border: 1px solid #888;
			min-width: 155px;
		}
		#vtbag-ui-animations,
		#vtbag-ui-messages {
			min-height: 120px;
			hyphens: auto;
			flex-grow: 1;
		}
		#vtbag-ui-animations,
		#vtbag-ui-messages {
			overflow-y: auto;
		}

		:root:not(.vtbag-ui-column) #vtbag-ui-panel > div {
			min-height: 160px;
		}
		#vtbag-ui-panel div.hidden {
			display: none;
		}

		#vtbag-ui-names,
		#vtbag-ui-filter,
		#vtbag-ui-control {
			position: relative;
		}
		#vtbag-ui-control button,
		#vtbag-ui-names button,
		#vtbag-ui-filter button {
			cursor: pointer;
			padding-bottom: 3pt;
			border: 1px solid #888;
			margin: 0;
			position: absolute;
			top: 0;
			right: 0;
			border-bottom-left-radius: 6px;
		}
		#vtbag-ui-control-hint {
			color: goldenrod;
		}
		#vtbag-ui-control-hint2,
		:root.vtbag-vt-active #vtbag-ui-control-hint {
			display: none;
		}
		:root.vtbag-vt-active #vtbag-ui-control-hint2 {
			display: block;
		}
		#vtbag-ui-controller,
		#vtbag-ui-controller2 {
			accent-color: #888888;
			cursor: not-allowed;
			pointer-events: none;
		}
		:root.vtbag-vt-active #vtbag-ui-controller,
		:root.vtbag-vt-active #vtbag-ui-controller2 {
			cursor: unset;
			pointer-events: unset;
			accent-color: unset;
		}

		#vtbag-ui-messages ol {
			padding-left: 16pt;
		}

		#vtbag-ui-names {
			display: flex;
			flex-direction: column;
		}

		#vtbag-ui-names ol {
			border: 1pt dashed grey;
			padding-right: 0px;
			padding-left: 0px;
			margin: 8px;
			overflow-y: auto;
			width: calc(100% - 8px);
			flex-grow: 1;
			list-style-type: none;
		}
		#vtbag-ui-names ol li {
			cursor: pointer;
			padding: 2pt 8pt;
			border-left: var(--vtbag-name-border-width) solid transparent;
			border-right: var(--vtbag-name-border-width) solid transparent;
			word-break: break-all;
		}
		#vtbag-ui-names ol li.old {
			border-left: var(--vtbag-name-border-width) solid darkslateblue;
		}
		#vtbag-ui-names li {
			position: relative;
			margin-bottom: 1px;
		}

		#vtbag-ui-names li.old-hidden::before {
			top: 50%;
			transform: scale(0.9) translateY(-50%);
			left: -18px;
			display: inline;
			content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImRhcmtnb2xkZW5yb2QiIGQ9Ik0yIDUuMjdMMy4yOCA0TDIwIDIwLjcyTDE4LjczIDIybC0zLjA4LTMuMDhjLTEuMTUuMzgtMi4zNy41OC0zLjY1LjU4Yy01IDAtOS4yNy0zLjExLTExLTcuNWMuNjktMS43NiAxLjc5LTMuMzEgMy4xOS00LjU0ek0xMiA5YTMgMyAwIDAgMSAzIDNhMyAzIDAgMCAxLS4xNyAxTDExIDkuMTdBMyAzIDAgMCAxIDEyIDltMC00LjVjNSAwIDkuMjcgMy4xMSAxMSA3LjVhMTEuOCAxMS44IDAgMCAxLTQgNS4xOWwtMS40Mi0xLjQzQTkuODYgOS44NiAwIDAgMCAyMC44MiAxMkE5LjgyIDkuODIgMCAwIDAgMTIgNi41Yy0xLjA5IDAtMi4xNi4xOC0zLjE2LjVMNy4zIDUuNDdjMS40NC0uNjIgMy4wMy0uOTcgNC43LS45N00zLjE4IDEyQTkuODIgOS44MiAwIDAgMCAxMiAxNy41Yy42OSAwIDEuMzctLjA3IDItLjIxTDExLjcyIDE1QTMuMDY0IDMuMDY0IDAgMCAxIDkgMTIuMjhMNS42IDguODdjLS45OS44NS0xLjgyIDEuOTEtMi40MiAzLjEzIi8+PC9zdmc+');
			position: absolute;
		}
		#vtbag-ui-names li.new-hidden::after {
			top: 50%;
			transform: scale(0.9) translateY(-50%);
			right: -18px;
			content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImRhcmtnb2xkZW5yb2QiIGQ9Ik0yIDUuMjdMMy4yOCA0TDIwIDIwLjcyTDE4LjczIDIybC0zLjA4LTMuMDhjLTEuMTUuMzgtMi4zNy41OC0zLjY1LjU4Yy01IDAtOS4yNy0zLjExLTExLTcuNWMuNjktMS43NiAxLjc5LTMuMzEgMy4xOS00LjU0ek0xMiA5YTMgMyAwIDAgMSAzIDNhMyAzIDAgMCAxLS4xNyAxTDExIDkuMTdBMyAzIDAgMCAxIDEyIDltMC00LjVjNSAwIDkuMjcgMy4xMSAxMSA3LjVhMTEuOCAxMS44IDAgMCAxLTQgNS4xOWwtMS40Mi0xLjQzQTkuODYgOS44NiAwIDAgMCAyMC44MiAxMkE5LjgyIDkuODIgMCAwIDAgMTIgNi41Yy0xLjA5IDAtMi4xNi4xOC0zLjE2LjVMNy4zIDUuNDdjMS40NC0uNjIgMy4wMy0uOTcgNC43LS45N00zLjE4IDEyQTkuODIgOS44MiAwIDAgMCAxMiAxNy41Yy42OSAwIDEuMzctLjA3IDItLjIxTDExLjcyIDE1QTMuMDY0IDMuMDY0IDAgMCAxIDkgMTIuMjhMNS42IDguODdjLS45OS44NS0xLjgyIDEuOTEtMi40MiAzLjEzIi8+PC9zdmc+');
			position: absolute;
		}
		#vtbag-ui-names ol li.old-invisible {
			border-left: var(--vtbag-name-border-width) solid darkgoldenrod;
		}
		#vtbag-ui-names ol li.new {
			border-right: var(--vtbag-name-border-width) solid darkolivegreen;
		}
		#vtbag-ui-names ol li.new-invisible {
			border-right: var(--vtbag-name-border-width) solid darkgoldenrod;
		}

		#vtbag-ui-names ol li.selected {
			background-color: var(--vtbag-background-accent);
		}
		:root.vtbag-vt-active #vtbag-ui-names li.invisible {
			color: #888;
		}

		:root.vtbag-vt-active #vtbag-ui-names:has(input:checked) li.invisible {
			border-top: 1pt dotted grey;
			font-size: 0;
			padding: 0;
		}
		#vtbag-ui-filter ul {
			list-style-type: none;
			margin: 8px 0 8px 0;
			padding-left: 0;
		}
		#vtbag-ui-filter ul label {
			margin-left: 8px;
			margin-right: 8px;
		}
		#vtbag-ui-filter > label {
			margin-left: 5px;
		}
		#vtbag-ui-filter input[type='text'] {
			margin-top: 5px;
			width: 10em;
		}
		#vtbag-ui-filter input[type='text']:not(:placeholder-shown) {
			border: 1pt solid darkgoldenrod;
		}

		#vtbag-ui-inner-panel > div > *:first-child,
		#vtbag-ui-panel > div > *:first-child {
			margin-top: 0;
		}

		#vtbag-ui-modi {
			display: flex;
			flex-direction: column;
		}
		#vtbag-ui-modi ul {
			padding-right: 8px;
			padding-left: 0px;
			margin: 8px 0 8px 0;
			list-style-type: none;
		}
		#vtbag-ui-modi li {
			margin-bottom: 8px;
		}
		:root:not(.vtbag-ui-column) #vtbag-ui-panel ~ button {
			/*	bottom: calc(var(--vtbag-panel-height, 226px) - 14px);*/
			bottom: 6px;
		}
		#vtbag-ui-inner-panel,
		#vtbag-ui-panel {
			background-color: #4861;
			accent-color: darkolivegreen;
			scrollbar-gutter: stable;
			display: flex;
			flex-direction: row;
			font-family: sans-serif;
			font-size: 12px;
			width: 100vw;
			height: var(--vtbag-panel-height, 226px);
			margin: 0px;
			min-height: fit-content;
			border: 0px solid red;
			overflow: auto;
			box-sizing: border-box;
		}

		:root.vtbag-ui-column {
			#vtbag-ui-panel {
				flex-direction: column;
				height: 100vh;
				width: var(--vtbag-panel-width, 200px);
			}
			.horizontal {
				display: none;
			}
		}
		:root:not(.vtbag-ui-column) {
			.vertical {
				display: none;
			}
		}

		#vtbag-ui-animations:empty,
		#vtbag-ui-info:empty {
			display: none;
		}
		:root:not([data-vtbag-modus='slow-motion']) #vtbag-ui-slow-motion {
			display: none;
		}
		:root:not([data-vtbag-modus='control']) #vtbag-ui-control {
			display: none;
		}

		input[type='range'] {
			width: calc(100% - 16px);
			margin: 8px;
		}

		h4 {
			margin-bottom: 8pt;
		}
		#vtbag-ui-control-play {
			display: none;
		}
		:root.vtbag-vt-active #vtbag-ui-control-exit {
			background-color: darkgoldenrod;
			color: white;
		}
		:root.vtbag-vt-active #vtbag-ui-control-play {
			display: block;
			position: fixed;
			left: 0;
			top: 0;
			z-index: 1000;
		}
		:root.vtbag-vt-active h4 {
			color: darkgoldenrod;
		}
		:root.vtbag-vt-active.vtbag-twin-sync h4 {
			color: darkred;
		}

		.vtbag-highlight:hover {
			background-color: #859b5f66;
		}

		:root {
			--vtbag-panel-height: 226px;
			--vtbag-panel-width: 200px;
		}
		#canvas {
			position: absolute;
			top: 0;
			left: 0;
			height: calc(100vh - var(--vtbag-panel-height));
			width: 100vw;
		}
		:root.vtbag-ui-column #canvas {
			width: calc(100vw - var(--vtbag-panel-width));
			height: 100vh;
		}
		:root.vtbag-ui-tl #canvas {
			left: 0;
			top: var(--vtbag-panel-height);
		}
		:root.vtbag-ui-tl :root.vtbag-ui-column #canvas {
			left: var(--vtbag-panel-width);
			top: 0;
		}

		#vtbag-main-frame {
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: calc(100vh - var(--vtbag-panel-height));
			border: none;
		}

		:root.vtbag-ui-tl #vtbag-main-frame {
			top: var(--vtbag-panel-height);
		}
		#vtbag-ui-panel {
			position: fixed;
			bottom: 0;
			right: 0;
		}
		:root.vtbag-ui-tl #vtbag-ui-panel {
			bottom: calc(100vh - var(--vtbag-panel-height));
		}
		#vtbag-ui-panel,
		#vtbag-ui-panel ~ button {
			animation: slide-from-bottom 0.5s both;
		}
		:root.vtbag-ui-tl :is(#vtbag-ui-panel, #vtbag-ui-panel ~ button) {
			animation: slide-from-top 0.5s both;
		}

		#divider {
			position: fixed;
			height: 4px;
			width: 100vw;
			right: 0;
			bottom: var(--vtbag-panel-height);
		}
		#divider:hover,
		:root.dragging #divider {
			cursor: row-resize;
			background-color: darkolivegreen;
		}
		:root.vtbag-vt-active #divider:hover,
		:root.dragging.vtbag-vt-activ #divider {
			background-color: darkgoldenrod;
		}

		:root.vtbag-ui-tl #divider {
			bottom: calc(100vh - var(--vtbag-panel-height) - 5px);
		}
		:root.vtbag-ui-column {
			#divider:hover,
			:root.dragging #divider {
				cursor: col-resize;
			}
		}

		:root.vtbag-ui-column {
			#vtbag-main-frame {
				height: 100vh;
				width: calc(100vw - var(--vtbag-panel-width));
			}
			#vtbag-ui-panel,
			#vtbag-ui-panel ~ button {
				animation: slide-from-right 0.5s both;
			}
			#divider {
				width: 4px;
				height: 100vh;
				right: var(--vtbag-panel-width);
				bottom: 0;
			}
		}
		:root.vtbag-ui-tl.vtbag-ui-column {
			#vtbag-ui-panel {
				right: calc(100vw - var(--vtbag-panel-width) - 18px);
				bottom: 0;
			}
			#vtbag-main-frame {
				top: 0;
				left: calc(var(--vtbag-panel-width) + 5px);
			}
			:is(#vtbag-ui-panel, #vtbag-ui-panel ~ button) {
				animation: slide-from-left 0.5s both;
			}
			#divider {
				right: calc(100vw - var(--vtbag-panel-width) - 24px);
			}
		}
		@keyframes slide-from-bottom {
			from {
				transform: translateY(var(--vtbag-panel-height));
			}
		}
		@keyframes slide-from-right {
			from {
				transform: translateX(var(--vtbag-panel-width));
			}
		}
		@keyframes slide-from-top {
			from {
				transform: translateY(calc(var(--vtbag-panel-height) * -1));
			}
		}
		@keyframes slide-from-left {
			from {
				transform: translateX(calc(var(--vtbag-panel-width) * -1));
			}
		}
		:root:has(#vtbot-ui-panel) #vtbot-loading-indicator {
			display: none;
		}
		hr {
			border-color: #888;
		}
	</style>
</body>
`;function K(t,e){t.forEach(i=>{try{$([...i.cssRules],e)}catch{}})}function $(t,e){t.forEach(i=>{i.constructor.name==="CSSStyleRule"?e(i):"cssRules"in i?$([...i.cssRules],e):"styleSheet"in i&&K([i.styleSheet],e)})}function P(){let t=new Map,e=top.__vtbag.inspectionChamber.frameDocument;n(e.documentElement,"root"),K([...e.styleSheets],o=>{let a=o.style.getPropertyValue("view-transition-name");a&&e.querySelectorAll(o.selectorText).forEach(g=>n(g,a))}),e.querySelectorAll('[style*="view-transition-name"').forEach(o=>n(o,o.style.viewTransitionName));let i=new Set(t.values());return i.delete("none"),i;function n(o,a){a=="none"?o.removeAttribute("data-vtbag-transition-name"):o.dataset.vtbagTransitionName=a,t.set(o,a)}}var f=null;function w(t,e){let i=top.document.documentElement,n,o,a=(r,I=0)=>(r instanceof TouchEvent?r.touches[0]?.clientX-I:r.clientX-I)??0,g=(r,I=0)=>(r instanceof TouchEvent?r.touches[0]?.clientY-I:r.clientY-I)??0,c=(r,I)=>{f=I,n=a(r)-I.getBoundingClientRect().x,o=g(r)-I.getBoundingClientRect().y,i.classList.add("dragging");let u=i.querySelector("#vtbag-main-frame");u&&(u.style.pointerEvents="none"),r.preventDefault()},l=r=>{i.classList.contains("dragging")&&e(a(r,n),g(r,o))},s=()=>{if(i.classList.contains("dragging")){i.classList.remove("dragging");let r=i.querySelector("#vtbag-main-frame");r&&(r.style.pointerEvents="auto")}f=null};t.addEventListener("mousedown",r=>c(r,t),{passive:!1}),t.addEventListener("touchstart",r=>c(r,t),{passive:!1}),t.ownerDocument.addEventListener("mousemove",r=>f===t&&l(r)),t.ownerDocument.addEventListener("touchmove",r=>f===t&&l(r)),t.ownerDocument.addEventListener("mouseup",r=>f===t&&s()),t.ownerDocument.addEventListener("touchend",r=>f===t&&s())}var _="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAxXpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjabVDbDcMgDPz3FB0BP3iNQ5pU6gYdvwc4URLlJA7bZx3GtP2+H3p1CBtZzCXVlAJg1ao0BCVMtMEcbPCAuYT8UqdDEJQUt860JO/f63wYzKshiiej8nZhuQrVX5ByM/KHtE8kCFY3qm6kMgV2gza/FVIt+fyFZQtXlHmok+bhfZjcc8vY3hpRVJFNWQNY1eYA2o+RNgQZzMq9EQ29wuCo4pNgIU972kF/4htZE32iZC4AAAGDaUNDUElDQyBwcm9maWxlAAB4nH2RPUjDQBzFX1OlohUHK4g4ZKhOdtEijqWKRbBQ2gqtOphc+gVNGpIUF0fBteDgx2LVwcVZVwdXQRD8AHF2cFJ0kRL/lxRaxHhw3I939x537wChWWWq2RMDVM0y0om4mMuvioFXBDCAEQBRiZl6MrOYhef4uoePr3cRnuV97s8xqBRMBvhE4hjTDYt4g3h209I57xOHWFlSiM+Jpwy6IPEj12WX3ziXHBZ4ZsjIpueJQ8RiqYvlLmZlQyWOEocVVaN8IeeywnmLs1qts/Y9+QuDBW0lw3Wa40hgCUmkIEJGHRVUYSFCq0aKiTTtxz38Y44/RS6ZXBUwciygBhWS4wf/g9/dmsWZaTcpGAd6X2z7YwII7AKthm1/H9t26wTwPwNXWsdfawJzn6Q3Olr4CBjaBi6uO5q8B1zuAKNPumRIjuSnKRSLwPsZfVMeGL4F+tfc3tr7OH0AstTV8g1wcAhMlih73ePdfd29/Xum3d8PoPlyuXZhFhMAAA5VaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOmMyOWNiMDgzLWMxOTktNDQ0ZC1iMjc4LTZlZDk0OGUwZDIyYSIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MDcxY2NkZC1kM2QxLTRmZTktYmVlNS01NWRmMzhmM2JlZmQiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjOTdmMWJlYi00N2E5LTRhMmMtYTcyNS0zOGZjMTZiNjI0YzEiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJXaW5kb3dzIgogICBHSU1QOlRpbWVTdGFtcD0iMTcyMDczMTcxNTgzMjY0MiIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjM0IgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNDowNzoxMVQyMzowMTo1MiswMjowMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjQ6MDc6MTFUMjM6MDE6NTIrMDI6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozNTMxMTg4NS00MWU5LTQ5OTktOTJkZC1mZTU0ODBjYmQ3NGUiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoV2luZG93cykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjQtMDYtMjlUMTU6NTM6MzQiLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OWY2NjUyZmYtZTdmYS00NGMyLTliMDktYmJiNjBlMzlhNTMwIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDI0LTA3LTExVDIzOjAxOjU1Ii8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PgVo1ZkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfoBwsVATfoqZ2LAAAdpElEQVRo3mV6WYxkaXbWWf7/bhGZkVtl7Ut3VXVP9TbtHs90z2aPZwZZsmwzssAGbMQggYEXXpB4QcATvCEekEBICBAPYCMe4MGyB2G8DDO0Z+me7umtumvvrKzMyozMyMiIuPf+/3/O4eFGZJXFzRuhyBvLPf9/tu985+C1r3zDMSGCmmkM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";var E="vtbag-ui-standby",tt="vtbag-ui-reopener-position";function et(){top.addEventListener("resize",()=>{});let{reopenerLeft:t,reopenerTop:e}=JSON.parse(top.sessionStorage.getItem(tt)??'{"reopenerLeft": "0px", "reopenerTop": "0px"}');top.document.body.insertAdjacentHTML("beforeend",`<div title="Reactivate the inspection chamber" id="vtbag-ui-reopen" style="position: fixed; z-index:1100; left: ${t}; top: ${e}"><img style="  border-radius: 50%;
  border: 8px dashed #8888;
  mask-image: radial-gradient(ellipse at center, white 35%, transparent 71%);
" src=${_} alt="Reactivate the inspection chamber" /><div>

		<style>
			#vtbag-ui-reopen g {
				stroke: #797c;
			}
			#vtbag-ui-reopen:hover {
				cursor: grab;
			}
			#vtbag-ui-reopen:hover g {
				stroke: #a97;
			}

			:root.dragging #vtbag-ui-reopen {
				cursor: grabbing;
			}
			:root.dragging #vtbag-ui-reopen g {
				stroke: #a97
			}
			</style>
			`);let i=top.document.querySelector("#vtbag-ui-reopen"),n=!1;i.addEventListener("click",()=>{setTimeout(()=>n=!1,100),n||(top.sessionStorage.removeItem(E),top.location.reload())}),w(i,(o,a)=>{i.style.left=`${o}px`,i.style.top=`${a}px`,n=!0,Pt(i)})}function Pt(t){top.sessionStorage.setItem(tt,JSON.stringify({reopenerLeft:t.style.left,reopenerTop:t.style.top}))}function h(t,e="",i=top.__vtbag.inspectionChamber.frameDocument,n=!1){let o="vtbag-adopted-sheet"+(e?"-"+e:"");i.getElementById(o)?.remove(),t&&i.head.insertAdjacentHTML(n?"afterbegin":"beforeend",`<style id="${o}">${t}</style>`)}function N(t,e){t?qt(e):Bt()}function Bt(){h("")}function qt(t=!1){h(`
	${t?`
* {
	pointer-events: none;
}
[data-vtbag-transition-name] {
	pointer-events: auto;
}`:""}

::view-transition-old(*) {
	outline: 3px dashed darkslateblue;
	border-radius: 5px;
}
::view-transition-new(*) {
	outline: 3px dashed darkolivegreen;
}
::view-transition-group(*),
[data-vtbag-transition-name] {
	outline: 2px dotted darkgoldenrod;
}
::view-transition-group(*),
::view-transition-image-pair(*),
::view-transition-old(*),
::view-transition-new(*),
[data-vtbag-transition-name] {
	cursor: help;
}
:root::view-transition {
	position: absolute;
	inset: 0;
}
`)}var it={bypass:"<h4>How to Bypass</h4><p>Navigation is <b>not intercepted</b>.</p><ol><li>Optional: Examine elements by selecting from the View Transition Name list</li><li>Navigate your page as usual</li></ol>","slow-motion":"<h4>Use Slow Motion</h4><ol><li>Use the slider to set a <b>time stretch factor</b></li><li>Press a link on your page to start a view transition and study the <b>slowed down animations!</li></ol>",control:"<h4>Take Full Control</h4><ol><li>Start a transition</li><li>Optional: Select animations from the list below</li><li>Move freely through the timeline by moving the sliders and concentrate on selected elements and groups.</li></ol>",compare:"<h4>Compare Side-by-side</h4><p>Sometimes you need a clear view of where you're coming from and where you're going!</p><p>Compare the <b>old and new pages side by side</b> and see what morphs where.</p>"};var d=()=>top.document.documentElement.classList.contains("vtbag-vt-active"),nt=()=>top.document.documentElement.classList.add("vtbag-vt-active"),ot=()=>top.document.documentElement.classList.remove("vtbag-vt-active"),z,k;function b(t,e,i=!1){let n=d();i||n||z||!top.document.startViewTransition?(!1,t()):(k=e,z=top.document.startViewTransition(t),z.finished.finally(()=>z=k=void 0))}function S(){top.__vtbag.inspectionChamber.viewTransition?.skipTransition()}function at(){lt(),gt()}function gt(){let t=1/Math.max(1e-6,parseFloat(top.document.querySelector("#vtbag-ui-tsf")?.innerText??"1.0"));top.__vtbag.inspectionChamber.animations?.forEach(e=>{e.playbackRate=t,e.playState==="paused"&&e.play()})}function rt(){let t=top.document.querySelector("#vtbag-ui-slo-mo"),e=top.document.querySelector("#vtbag-ui-tsf");t.addEventListener("input",i=>{if(i.target instanceof HTMLInputElement){let n=(Math.exp(parseInt(i.target.value,10)/100)-100)/100+1-.14;e.innerText=`${n.toFixed(1)}`,gt()}})}function lt(){let t=top.__vtbag.inspectionChamber,e=t.longestAnimation;e&&(top.document.querySelector("#vtbag-ui-slo-mo-progress").innerText=` ${~~(e.currentTime??0)} / ${t.animationEndTime} ms`,d()&&setTimeout(lt,20))}var H,m,Y=null;function st(){H=top.document.querySelector("#vtbag-ui-panel"),m=top.document.querySelector("#vtbag-ui-inner-panel"),t(),top.document.querySelector("#vtbag-ui-light-dark").addEventListener("click",t);function t(){let i=top.document.documentElement.style.colorScheme==="dark";m.style.backgroundColor=i?"#000":"#fff",m.style.color=i?"#fff":"#000"}w(m.children[0],(i,n)=>{m.style.left=`${i}px`,m.style.top=`${n}px`}),w(m.children[2],(i,n)=>{let o=m.getBoundingClientRect();m.style.width=`${Math.max(200,i-o.x+32)}px`,m.style.height=`${Math.max(200,n-o.y+32)}px`});let e=m.querySelector("#vtbag-ui-opacity");m.style.opacity=`${parseInt(e.value,10)/100}`,e.addEventListener("input",i=>{m.style.opacity=`${parseInt(i.target.value,10)/100}`}),H.querySelectorAll(":scope > div").forEach(i=>T(i))}function T(t){t.querySelector(":scope > h4")?.addEventListener("click",e=>{b(()=>{let i=e.target.closest("#vtbag-ui-panel > div");m.children.length>3&&H.insertBefore(m.children[1],Y),Y=null,i?(Y=i.nextElementSibling,m.insertBefore(i,m.children[1]),m.style.display="block"):m.style.display="none"},"inner panel")})}function ct(){let t=m.children[1].id;(t==="vtbag-ui-slow-motion"||t==="vtbag-ui-control")&&(H.insertBefore(m.children[1],Y),m.style.display="none")}function It(t,e,i,n,o){let a=e.createElement("vtbag-pseudo-twin");c(a,t,"","");let g=top.__vtbag.inspectionChamber.twin=a.firstElementChild;i.forEach(l=>{let s=c(g,t,"group",l),r=c(s,t,"image-pair",l);c(r,t,"old",l)&&n.add(l),c(r,t,"new",l)&&o.add(l)}),e.body.insertAdjacentElement("beforeend",g);function c(l,s,r,I){if(!l)return;let u=top.__vtbag.inspectionChamber,C=l.ownerDocument,v=s.defaultView.getComputedStyle(s.documentElement,r?`::view-transition-${r}(${I})`:"::view-transition");if(!v.height.endsWith("px"))return;u?.styleMap?.set(`${r}-${I}`,v);let A=C.createElement("vtbag-pseudo-twin");return A.id=r?`vtbag-twin--view-transition-${r}-${I}`:"vtbag-twin--view-transition",A.dataset.vtbagTransitionName=I,A.dataset.vtbagTransitionPseudo=r,l.insertAdjacentElement("beforeend",A),mt(v,A.style),A.style.visibility="hidden",A}}function ut(){top.document.documentElement.classList.add("vtbag-twin-sync"),setTimeout(()=>{let t=top.__vtbag.inspectionChamber,e=t.frameDocument.documentElement;[...t.twin.children].forEach(async i=>{let n=i.dataset.vtbagTransitionName;U(e,i,n),U(e,i.children[0],n),U(e,i.children[0].children[0],n),U(e,i.children[0].children[1],n),await new Promise(o=>setTimeout(o))}),top.document.documentElement.classList.remove("vtbag-twin-sync")})}function U(t,e,i){if(!e)return;let n=e.dataset.vtbagTransitionPseudo,a=e.ownerDocument.defaultView.getComputedStyle(t,`::view-transition-${n}(${i})`),g=e.style;mt(a,g)}function mt(t,e){e.position=t.position,e.inset=t.inset,e.height=t.height,e.width=t.width,e.transform=t.transform,e.zIndex=t.zIndex,e.transformOrigin=t.transformOrigin,e.perspective=t.perspective}function dt(t){if(d()){let e,i=1/0;top.__vtbag.inspectionChamber.twin.querySelectorAll("vtbag-pseudo-twin > vtbag-pseudo-twin > vtbag-pseudo-twin").forEach(n=>{let{clientX:o,clientY:a}=t,{top:g,bottom:c,left:l,right:s,width:r,height:I}=n.getBoundingClientRect(),u=n.dataset.vtbagTransitionName,C=n.dataset.vtbagTransitionPseudo;if(r*I<i&&g<=a&&a<=c&&l<=o&&o<=s){let M=!0,v;window.top.document.querySelectorAll("#vtbag-ui-names li").forEach(A=>{A.innerText===u&&(v=A,A.classList.contains(`${C}-hidden`)&&(M=!1))}),M&&(i=r*I,e=v)}}),e?.click()}}function At(){h(`
		@keyframes vtbag-twin-noop {
			from { opacity: 1; } to { opacity: 1; }
		}
		::view-transition-image-pair(*) {
			animation: vtbag-twin-noop forwards;
			animation-duration: inherit;
		}`,"catch",void 0,!0)}async function pt(){let t=top.__vtbag.inspectionChamber,e=t.frameDocument,i=t.animations=[],n=t.animationMap=new Map,o=t.keyframesMap=new Map,a=new Set;t.styleMap=new Map;let g=new WeakSet,c=!0;for(;c;)c=!1,e.getAnimations().forEach(I=>{let u=I;if(!g.has(u)&&u.effect?.pseudoElement?.startsWith("::view-transition")&&u.playState!=="finished"){let C=u.animationName;if(C!=="vtbag-twin-noop"&&C!=="none"){let{viewTransitionName:M}=B(u);a.add(M),i.push(u),n.set(C,u),u.pause(),u.currentTime=0,o.set(C,u.effect?.getKeyframes())}c=!0}g.add(u)}),c&&await new Promise(I=>e.defaultView.setTimeout(I));let l=I=>I.effect?.getComputedTiming().endTime?.valueOf()??0;t.longestAnimation=i.reduce((I,u)=>l(u)>l(I)?u:I,i[0]),t.animationEndTime=~~l(t.longestAnimation);let s=new Set,r=new Set;It(e,e,a,s,r),D(s,r),top.document.querySelector("#canvas").style.zIndex=""}function Ct(){let t=top.__vtbag.inspectionChamber;t.frameDocument.querySelector("#vtbag-adopted-sheet")?.remove(),t.animations?.forEach(e=>{try{e.finish()}catch(i){console.error(i,e,e.effect?.getComputedTiming())}})}function vt(t){let e=(o,a)=>a?`<tr><td style="text-align:right">${o}</td><td>${a}</td><tr>`:"",i=top.document.querySelector("#vtbag-ui-animations");i.innerHTML=d()?`<h4>Animations of ${t}:</h4>`+n("old")+n("new")+n("group")+n("image-pair"):"",T(i);function n(o){let a=top.__vtbag.inspectionChamber,g=a.styleMap?.get(`${o}-${t}`),c=g?.animationName;if(!g||!c||c==="vtbag-twin-noop"||c==="none")return"";let l=c.split(", "),s=g.animationDelay.split(", "),r=g.animationDuration.split(", "),I=g.animationDirection.split(", "),u=g.animationFillMode.split(", "),C=g.animationIterationCount.split(", "),M=g.animationTimingFunction.replace(/\),/g,")@").split("@ "),v="animationTimeline"in g?g.animationTimeline.split(", "):[],A=[];return l.forEach((y,x)=>{A.push(`<details><summary>${o}: ${y}(${s[x%s.length]}, ${r[x%r.length]})</summary>${Wt(x,y)}</details>`)}),A.join("")+"<hr>";function Wt(y,x){return`
<table>
	${e("direction:",I[y%I.length])}
	${e("fill-mode:",u[y%u.length])}
	${e("iteration-count:",C[y%C.length])}
	${e("timing-function:",M[y%M.length])}
	${e("timeline:",v[y%v.length])}
	${e("animates:",Ot(x))}
</table>`;function Ot(Rt){let F=new Set;a.keyframesMap?.get(Rt)?.forEach(G=>Object.keys(G).forEach(Qt=>F.add(Qt)));let Vt=["offset","computedOffset","easing","composite"];return[...F].filter(G=>!Vt.includes(G)).sort().join(", ")}}}}function W(){top.document.querySelector('#vtbag-ui-filter input[type="text"]').value="",top.document.querySelector("#vtbag-ui-filter ul input").click(),j()}function bt(){top.document.querySelectorAll("#vtbag-ui-names li").forEach(t=>t.classList.remove("selected","old-hidden","new-hidden")),L(),O()}function Mt(){top.document.querySelector("#vtbag-ui-filter ul").addEventListener("change",j),top.document.querySelector('#vtbag-ui-filter input[type="text"]').addEventListener("input",j),top.document.querySelector("#vtbag-ui-filter button").addEventListener("click",W)}function D(t,e){let i;return b(()=>{top.document.querySelector("#vtbag-ui-info").innerHTML="",top.document.querySelectorAll("#vtbag-ui-names li").forEach(o=>o.remove()),top.document.querySelector("#vtbag-ui-names h4").innerText=e?"Animation Groups":"Elements w/ View Transition Names",top.document.querySelector("#vtbag-ui-names div").style.display=e?"flex":"none";let n=top.document.querySelector("#vtbag-ui-names > ol");i=[...new Set([...t,...e??[]])].sort(),i.forEach((o,a)=>{let g=top.document.createElement("li");g.innerText=o,e&&t.has(o)&&g.classList.add("old"),e?.has(o)&&g.classList.add("new"),g.style.viewTransitionName=`vtbag-name-${a}`,n.appendChild(g)}),top.document.querySelector("#vtbag-ui-filter ul").style.display=e?"block":"none",j()},"update names"),i}function j(){let t=top.document.querySelectorAll("#vtbag-ui-names li"),e=top.document.querySelector("#vtbag-ui-filter ul input:checked").id.replace("vtbag-c-",""),i=top.document.querySelector('#vtbag-ui-filter input[type="text"]').value;b(()=>{t.forEach(n=>{let o=n.style,a=n.classList,g=n.innerText;o.display=(i===""||g.includes(i))&&(e==="all"||e==="both"&&a.contains("new")&&a.contains("old")||e==="old-only"&&a.contains("old")&&!a.contains("new")||e==="new-only"&&a.contains("new")&&!a.contains("old")||e==="old"&&a.contains("old")||e==="new"&&a.contains("new"))?"list-item":"none"})},"refresh names")}function R(){let t=top.__vtbag.inspectionChamber;if(Tt()){ut(),t.updateNameVisibilityTimeout=void 0;let e=t.twin.ownerDocument,i=top.document,n=top.getComputedStyle(i.documentElement),o=i.documentElement.classList.contains("vtbag-ui-column"),a=o?parseFloat(n.getPropertyValue("--vtbag-panel-width")||"0"):0,g=o?0:parseFloat(n.getPropertyValue("--vtbag-panel-height")||"0");i.querySelectorAll("#vtbag-ui-names li").forEach(c=>{let l=c.innerText,s=c.classList;s[s.contains("old")&&yt(e.querySelector(`#vtbag-twin--view-transition-old-${l}`),a,g)===!1?"add":"remove"]("old-invisible"),s[s.contains("new")&&yt(e.querySelector(`#vtbag-twin--view-transition-new-${l}`),a,g)===!1?"add":"remove"]("new-invisible"),s[(!s.contains("old")||s.contains("old-invisible"))&&(!s.contains("new")||s.contains("new-invisible"))?"add":"remove"]("invisible")}),d()&&(t.updateNameVisibilityTimeout=top.setTimeout(R,1e3))}}function yt(t,e=0,i=0){if(!t)return;let{top:n,right:o,bottom:a,left:g,width:c,height:l}=t.getBoundingClientRect();return c>0&&l>0&&n<window.top.innerHeight-i&&a>0&&g<window.top.innerWidth-e&&o>0}function L(){let t=[];top.document.querySelectorAll("#vtbag-ui-names li").forEach(e=>{let i=e.innerText,n=e.classList;n.contains("old-hidden")&&t.push(`::view-transition-old(${i}) { visibility: hidden; }`),n.contains("new-hidden")&&t.push(`::view-transition-new(${i}) { visibility: hidden; }`)}),h(t.join(`
`),"image-visibility")}function Jt(t){let e=top.document.documentElement.dataset.vtbagModus==="control"&&top.document.querySelector("#vtbag-ui-names h4").innerText==="Animation Groups",i=top.document.querySelectorAll("#vtbag-ui-names li"),n;i.forEach(o=>{if(o.innerText===t){let a=top.document.querySelector("#vtbag-ui-controller"),g=top.document.querySelector("#vtbag-ui-progress"),c=top.document.querySelector("#vtbag-ui-controller2"),l=top.document.querySelector("#vtbag-ui-progress2");o.classList.contains("selected")?(c.value=a.value,l.innerText=g.innerText):(a.value=c.value,g.innerText=l.innerText),o.classList[e?"toggle":"add"]("selected"),n=o,o.style.display==="none"&&W()}else e||o.classList.remove("selected")}),n&&n.scrollIntoView({behavior:"instant",block:"nearest",inline:"nearest"})}function Ft(t){let e=top.document.querySelector("#vtbag-ui-info");if(t&&!d())navigator.clipboard.writeText(`inspect(top.document.querySelector("#vtbag-main-frame").contentDocument.querySelector("${ht(t)}"))`),e.innerHTML=`<h4>Info</h4>
						<p>DevTools selector '<b><code>${ht(t)}</code></b>' copied to clipboard. Paste to DevTools console to further inspect the element.</p>`;else{navigator.clipboard.writeText('inspect(top.document.querySelector("#vtbag-main-frame").contentDocument.querySelector(":root"))');let i=t&&t.dataset.vtbagTransitionName;e.innerHTML=`<h4>Info</h4>
						<p>DevTools selector '<b><code>:root</code></b>' copied to clipboard. Paste to DevTools console, then expand the <code>&lt;html></code> element and its <code>::view-transition</code> pseudo element.</p>${i&&"<p>Look for the <code>::view-transition-group("+i+")</code> pseudo element and its children.</p>"}`}T(e)}function ht(t,e=!0){let i=[];for(;t&&t.nodeType===Node.ELEMENT_NODE;){let n=t.nodeName.toLowerCase();if(e&&t.id){n="#"+t.id,i.unshift(n);break}else{let o=t,a=1;for(;o=o.previousElementSibling;)o.nodeName.toLowerCase()===n&&a++;a!==1&&(n+=":nth-of-type("+a+")")}i.unshift(n),t=t.parentNode}return i.join(" > ")}function wt(){top.document.querySelector("#vtbag-ui-names button").addEventListener("click",()=>bt()),top.document.querySelector("#vtbag-ui-names-old").addEventListener("click",()=>{top.document.querySelectorAll("#vtbag-ui-names li").forEach(t=>{t.classList.contains("old")&&t.classList.toggle("old-hidden")}),L()}),top.document.querySelector("#vtbag-ui-names-new").addEventListener("click",()=>{top.document.querySelectorAll("#vtbag-ui-names li").forEach(t=>{t.classList.contains("new")&&t.classList.toggle("new-hidden")}),L()}),top.document.querySelector("#vtbag-ui-names ol").addEventListener("click",t=>{if(t.target instanceof HTMLElement){let e=t.target.closest("li");if(e&&t instanceof MouseEvent){e.style.display==="none"&&W();let i=top.document.documentElement.dataset.vtbagModus;b(()=>{let{left:n,width:o}=e.getBoundingClientRect(),a=t.clientX-n,g=a>=0&&a<=20,c=a>=o-20&&a<=o,l=e.classList;if(g&&l.contains("old")){l.toggle("old-hidden"),L();return}if(c&&l.contains("new")){l.toggle("new-hidden"),L();return}let s=e.innerText;Xt(s),Jt(s);let r=window.top.__vtbag.inspectionChamber?.frameDocument.querySelector(`[data-vtbag-transition-name="${s}"]`);i&&i!=="bypass"&&Ft(r),vt(s)},"names",!0)}}O()})}var Lt=[{boxShadow:"0 0  0px blue"},{boxShadow:"0 0 50px blue"},{boxShadow:"0 0 100px blue",display:"inline-block",minWidth:"20px",minHeight:"20px",backgroundColor:"darkslateblue",opacity:"0.5"},{boxShadow:"0 0 50px blue"},{boxShadow:"0 0  0px blue"}];function Xt(t){if(d())Kt(t);else{let e=top.__vtbag.inspectionChamber,i=e.frameDocument.querySelector(`[data-vtbag-transition-name="${t}"]`);if(i){i.scrollIntoView({behavior:"instant",block:"nearest",inline:"nearest"});let n=self.getComputedStyle(i).display;Lt[2].display=n.includes("block")?n:"inline-block",e.glow=i.animate(Lt,{duration:500,iterations:1}),setTimeout(()=>e.glow=void 0,500)}}}function Kt(t){h(`
		::view-transition-old(*),
		::view-transition-new(*) {
			opacity: 0;
		}
		::view-transition-old(${t}) {
			box-shadow: 0 0 100px blue;
			background-color: darkslateblue;
      opacity: 1;
			transition: all 0.5s;
		}
		::view-transition-new(${t}) {
			box-shadow: 0 0 100px green;
			background-color: darkolivegreen;
      opacity: 1;
			transition: all 0.5s;
		}`,"glow"),setTimeout(()=>h("","glow"),500)}var V=-2,q=-1;function ft(){q=-1,V=-2;let t=top.__vtbag.inspectionChamber.animationEndTime;top.document.querySelector("#vtbag-ui-controller-max").innerText=t+" ms",top.document.querySelector("#vtbag-ui-progress").innerText="0";let e=top.document.querySelector("#vtbag-ui-controller");e.max=""+t,e.value="0",e.disabled=!1,top.document.querySelector("#vtbag-ui-progress2").innerText="0";let i=top.document.querySelector("#vtbag-ui-controller2");i.max=""+t,i.value="0",i.disabled=!1,R(),Q()}function Tt(){let t=q!==V;return q=V,t}function Q(){let t=top.__vtbag.inspectionChamber,e=t.animations;if(e){let i=parseInt(top.document.querySelector("#vtbag-ui-progress").innerText),n=parseInt(top.document.querySelector("#vtbag-ui-progress2").innerText);V=i+n;let o=new Set;top.document.querySelectorAll("#vtbag-ui-names li.selected").forEach(a=>o.add(a.innerText)),e.forEach(a=>{let{viewTransitionName:g}=B(a);a.currentTime=g&&o.has(g)?i:n})}t.updateNameVisibilityTimeout&&(top.clearTimeout(t.updateNameVisibilityTimeout),t.updateNameVisibilityTimeout=void 0,d()&&(t.updateNameVisibilityTimeout=top.setTimeout(R,1e3)))}function B(t){let e=t.effect?.pseudoElement?.replace(/::view-transition-(new|old|group|image-pair)\((.*)\)/,"$1 $2").split(" ");return{pseudoName:e[0],viewTransitionName:e[1]}}function Nt(){let t=top.document.querySelector("#vtbag-ui-controller"),e=top.document.querySelector("#vtbag-ui-progress");t.addEventListener("input",o=>{o.target instanceof HTMLInputElement&&(e.innerText=""+~~o.target.value,Q())});let i=top.document.querySelector("#vtbag-ui-controller2"),n=top.document.querySelector("#vtbag-ui-progress2");i.addEventListener("input",o=>{o.target instanceof HTMLInputElement&&(n.innerText=""+~~o.target.value,Q())})}function O(){d()&&top.document.documentElement.dataset.vtbagModus==="control"&&Q()}var Dt="vtbag-ui-panel-orientation",jt="vtbag-ui-framed",zt="named_only",kt="\u{1F52C}";top.__vtbag??={};top.__vtbag.inspectionChamber??={initialized:!1};var p=top.__vtbag.inspectionChamber,xt=!0;top===self?top.setTimeout(ee,500):$t();function $t(){let t=p.frameDocument=self.document;self.addEventListener("pageswap",Et,{once:!0}),self.addEventListener("pagereveal",_t,{once:!0}),p.initialized||(p.initialized=!0,e());function e(){let i=t.startViewTransition;t.startViewTransition=n=>(Et(),p.viewTransition=i.call(t,async()=>{await Promise.resolve(),await n(),Zt()}),p.viewTransition)}}function Et(){!1,p.glow?.cancel(),N(!1,!1)}function _t(t){p.viewTransition="viewTransition"in t&&t.viewTransition||void 0,Zt()}function Zt(){!1,p.viewTransition&&(At(),te())}function te(){nt();let t=top.document.documentElement,e=p.viewTransition,i={bypass:()=>{},"slow-motion":at,control:ft,compare:()=>{}},n=t.dataset.vtbagModus;e.updateCallbackDone.catch(()=>{}),e.ready.then(async()=>{if(n&&n!=="bypass"){let o=top.document.querySelector("#canvas");o&&(o.style.zIndex="1000",o.style.cursor="wait"),await pt(),N(!!top.document.querySelector("#vtbag-ui-framed")?.checked,!!top.document.querySelector("#vtbag-ui-named-only")?.checked),p.twin.ownerDocument.addEventListener("click",dt),i[n]()}top.history.replaceState(history.state,"",self.location.href),top.document.title=kt+" "+self.document.title}).finally(()=>{}),e.finished.finally(()=>{ot(),p.viewTransition=void 0;let o=top.__vtbag.inspectionChamber?.frameDocument?.querySelector("#vtbag-twin--view-transition")?.remove();Ct(),p.animations=void 0,p.longestAnimation=void 0,N(!!top.document.querySelector("#vtbag-ui-framed")?.checked,!!top.document.querySelector("#vtbag-ui-named-only")?.checked),D(P()),L(),top.document.querySelector("#vtbag-ui-slo-mo-progress").innerText="",top.document.querySelector("#vtbag-ui-animations").innerText="",!t.dataset.vtbagModus&&top.document.querySelector("#vtbag-ui-modi li input")?.click(),setTimeout(()=>{let a=top.document.querySelector("#vtbag-ui-inner-panel:has( > div:nth-of-type(2):empty)");a&&(a.style.display="none")},100)})}function Yt(){let t=top.document.documentElement;t.style.setProperty("--vtbag-background-accent",t.style.colorScheme==="dark"?"#4E545D":"#c6d1d7")}async function ee(){if(top.document.querySelector("#vtbag-ui-panel"))return;let t=top.document.documentElement;if(top.sessionStorage.getItem(E)==="true"){et();return}let e=top.getComputedStyle(t).colorScheme,i=top.document.title,n=top.document.querySelector('link[rel="icon"]')?.outerHTML??"",o=(await X).replace('<iframe id="vtbag-main-frame" src="/"></iframe>',`<iframe id="vtbag-main-frame" style="opacity: 0;" src="${location.href}"></iframe>`).replace("<title></title>",`<title>${kt} ${i}</title>`).replace('<link rel="icon"/>',n);top.addEventListener("resize",St),t.innerHTML=o,t.style.colorScheme=e,St(),Yt(),t.dataset.vtbagModus="";let a=top.document.querySelector("#vtbag-main-frame");if(await new Promise(l=>a.onload=l),!top.document.startViewTransition){top.document.querySelector("#vtbag-ui-messages").innerHTML=`
			<p>I'm sorry!</p><p>Native view transitions are required to make the \u{1F52C} Inspection Chamber work, but they are not supported by this browser.</p>
			<p>Sadly have to give up.</p>`,top.document.querySelectorAll("#vtbag-ui-modi, #vtbag-ui-filter, #vtbag-ui-names, #vtbag-ui-animations, #vtbag-ui-info").forEach(l=>l.remove());return}let g=top.__vtbag.inspectionChamber.frameDocument=a.contentDocument;D(P()),ne();let c=top.document.querySelector("#divider");w(c,(l,s)=>{t.classList.contains("vtbag-ui-column")?t.classList.contains("vtbag-ui-tl")?t.style.setProperty("--vtbag-panel-width",`calc(max(200px, ${Math.min(innerWidth-100,l)}px))`):t.style.setProperty("--vtbag-panel-width",`calc(max(200px, 100vw - ${Math.max(100,l+1)}px))`):t.classList.contains("vtbag-ui-tl")?t.style.setProperty("--vtbag-panel-height",`calc(max(212px, ${Math.min(innerHeight-100,s)}px))`):t.style.setProperty("--vtbag-panel-height",`calc(max(212px, 100vh - ${Math.max(100,s+1)}px))`)}),a.animate([{opacity:0,transform:"translateY(100vh)"},{opacity:1}],{duration:500,fill:"forwards"}),g.addEventListener("click",ie)}function ie(t){if(!d()&&!t.defaultPrevented){let i=t.target.closest("[data-vtbag-transition-name]");if(i){let n=i.dataset.vtbagTransitionName;top.document.querySelectorAll("#vtbag-ui-names li").forEach(o=>{o.innerText===n&&(o.click(),t.ctrlKey&&t.shiftKey&&t.preventDefault())})}}}function St(){let t=top.document.documentElement,e=top.localStorage.getItem(Dt)??"";e?(e.split(" ").forEach(i=>t.classList.add(i)),Ut()):top.matchMedia("(orientation: landscape)").matches!==t.classList.contains("vtbag-ui-column")&&Ht()}function Ht(){b(()=>{let t=top.document.documentElement.classList;S(),t.toggle("vtbag-ui-column"),t.contains("vtbag-ui-column")&&t.toggle("vtbag-ui-tl"),top.localStorage.setItem(Dt,[...t].filter(e=>e.startsWith("vtbag-ui-")).join(" ")),Ut()},"switch orientation")}function Ut(){let t=top.document.querySelector("#vtbag-ui-turn"),e=top.document.documentElement.classList;t.innerText="\u292A\u2928\u2929\u2927"[(e.contains("vtbag-ui-column")?2:0)+(e.contains("vtbag-ui-tl")?1:0)]}function ne(){top.document.querySelector("#vtbag-ui-turn").addEventListener("click",()=>Ht()),top.document.querySelector("#vtbag-ui-light-dark").addEventListener("click",()=>{let o=top.document.documentElement.style;top.document.querySelector("#vtbag-main-frame").contentDocument.documentElement.style.colorScheme=o.colorScheme=o.colorScheme==="dark"?"light":"dark",Yt()}),st(),top.document.querySelector("#vtbag-ui-standby").addEventListener("click",()=>{top.sessionStorage.setItem(E,"true"),top.location.reload()}),top.document.querySelector("#vtbag-ui-modi ul").addEventListener("change",oe),Mt(),wt();let e=top.document.querySelector("#vtbag-ui-framed"),i=top.document.querySelector("#vtbag-ui-named-only");e.addEventListener("change",n),i.addEventListener("change",n);function n(){let o=e.checked,a=i.checked;top.sessionStorage.setItem(jt,o?"X":""),top.sessionStorage.setItem(zt,a?"X":""),N(o,a)}rt(),Nt(),top.document.querySelectorAll("#vtbag-ui-control-exit, #vtbag-ui-control-play").forEach(o=>o.addEventListener("click",S)),top.addEventListener("keyup",function(o){o.key==="Escape"&&(d()?S():(top.sessionStorage.setItem(E,"true"),top.location.reload()))})}function oe(){let t=top.document.documentElement,e=top.document.querySelector("#vtbag-ui-modi ul input:checked");if(e){let i=e.id.replace("vtbag-m-","");i!==t.dataset.vtbagModus&&b(()=>{t.dataset.vtbagModus=i,S(),top.document.querySelector("#vtbag-ui-filter ul input").click(),i==="slow-motion"&&J("#vtbag-ui-slow-motion"),i==="control"&&J("#vtbag-ui-control"),i==="bypass"&&J("#vtbag-ui-modi");let n=top.document.querySelector("#vtbag-ui-messages");n.innerHTML=it[i],T(n);let o=top.document.querySelector("#vtbag-ui-modi");xt&&o.parentElement?.id==="vtbag-ui-panel"&&n.parentElement?.id==="vtbag-ui-panel"&&(xt=!1,top.document.querySelector("#vtbag-ui-panel")?.insertAdjacentElement("afterbegin",top.document.querySelector("#vtbag-ui-modi"))),ct()},"update-modus")}}function J(t){let e=top.document.querySelector("#vtbag-ui-framed"),i=top.document.querySelector("#vtbag-ui-named-only"),n=e.parentElement,o=top.document.querySelector(t);e.checked=!!top.sessionStorage.getItem(jt),i.checked=!!top.sessionStorage.getItem(zt),N(e.checked,i.checked),n&&o&&n.parentElement!==o&&o.insertAdjacentElement("beforeend",n)}})();