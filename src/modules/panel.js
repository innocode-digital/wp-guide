import GuideButton from "./button"

const { PluginDocumentSettingPanel } = wp.editPost

export default ( props ) => {
	const { pages } = props
	console.log(pages)
	return (
		( pages && pages.length > 0 ) && <>
			<PluginDocumentSettingPanel
				name="wp-guide-panel"
				title="Useful Information"
			>
				<GuideButton pages={pages}/>
			</PluginDocumentSettingPanel>
		</>
	)
}
