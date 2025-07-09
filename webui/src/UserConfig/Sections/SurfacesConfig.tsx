import React from 'react'
import { observer } from 'mobx-react-lite'
import { UserConfigHeadingRow } from '../Components/UserConfigHeadingRow.js'
import { UserConfigSwitchRow } from '../Components/UserConfigSwitchRow.js'
import { UserConfigProps } from '../Components/Common.js'

export const SurfacesConfig = observer(function SurfacesConfig(props: UserConfigProps) {
	return (
		<>
			<UserConfigHeadingRow label="Surfaces" />
			<UserConfigSwitchRow userConfig={props} label="Watch for new USB Devices" field="usb_hotplug" />

			<UserConfigSwitchRow
				userConfig={props}
				label={
					<>
						Watch for Discoverable Remote Surfaces
						<br />
						Such as Companion Satellite, Stream Deck Studio and Stream Deck Network Dock
					</>
				}
				field="discoveryEnabled"
			/>

			<UserConfigSwitchRow
				userConfig={props}
				label={
					<>
						Enable direct connection to Streamdecks
						<br />
						When disabled support for the Elgato software Plugin will be enabled
					</>
				}
				requiresRestart
				inverted
				field="elgato_plugin_enable"
			/>
			<UserConfigSwitchRow userConfig={props} label="Enable connected X-keys" requiresRestart field="xkeys_enable" />
		</>
	)
})
