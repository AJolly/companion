import React from 'react'
import { CFormCheck } from '@coreui/react'
import type { UserConfigModel } from '@companion-app/shared/Model/UserConfigModel.js'

interface SurfacesStepProps {
	config: Partial<UserConfigModel>
	setValue: (key: keyof UserConfigModel, value: any) => void
}

export function SurfacesStep({ config, setValue }: SurfacesStepProps) {
	return (
		<div>
			<h5>USB Surface Detection Configuration</h5>
			<div className="indent3">
				<CFormCheck
					label="Watch for newly connected USB devices"
					checked={config.usb_hotplug}
					onChange={(e) => setValue('usb_hotplug', e.currentTarget.checked)}
				/>
			</div>
			<div className="indent4">
				<p>Stream Deck USB Hardware</p>
				<CFormCheck
					type="radio"
					label="Use Companion natively (requires Stream Deck software to be closed)"
					checked={!config.elgato_plugin_enable}
					onChange={() => setValue('elgato_plugin_enable', false)}
				/>
				<CFormCheck
					type="radio"
					label="Use Stream Deck software via Companion plugin"
					checked={config.elgato_plugin_enable}
					onChange={() => setValue('elgato_plugin_enable', true)}
				/>
			</div>
			 
		</div>
	)
}
