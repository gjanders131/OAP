const ButtonReadJSON = (buttonLabel: string) => {
	return (
		<div>
			<button
				onClick={() => {
					window.api.OpenFile().then((filePath: string) => {
						window.fs
							.ReadFile([filePath])
							.then((result: string) => {
								console.log(JSON.parse(result))
							})
					})
				}}
			>
				{buttonLabel}
			</button>
		</div>
	)
}

export default ButtonReadJSON
