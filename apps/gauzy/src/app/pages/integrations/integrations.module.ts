import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntegrationsRoutingModule } from './integrations-routing.module';
import { IntegrationsComponent } from './components/integrations/integrations.component';
import { UpworkComponent } from './components/upwork/upwork.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import {
	NbIconModule,
	NbInputModule,
	NbButtonModule,
	NbCardModule
} from '@nebular/theme';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FileUploaderModule } from '../../@shared/file-uploader-input/file-uploader-input.module';
import { FileUploadModule } from 'ng2-file-upload';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: [IntegrationsComponent, UpworkComponent],
	imports: [
		CommonModule,
		IntegrationsRoutingModule,
		NbCardModule,
		NbButtonModule,
		NbInputModule,
		NbIconModule,
		FileUploaderModule,
		FileUploadModule,
		TranslateModule.forChild({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		})
	]
})
export class IntegrationsModule {}
