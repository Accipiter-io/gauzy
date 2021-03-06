import { Module } from '@nestjs/common';
import { Timesheet } from './timesheet.entity';
import { TimeSlot } from './time-slot.entity';
import { Activity } from './activity.entity';
import { Screenshot } from './screenshot.entity';
import { TimeLog } from './time-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimerController } from './timer/timer.controller';
import { TimerService } from './timer/timer.service';
import { Employee } from '../employee/employee.entity';

@Module({
	controllers: [TimerController],
	imports: [
		TypeOrmModule.forFeature([
			TimeSlot,
			Activity,
			Screenshot,
			TimeLog,
			Timesheet,
			Employee
		])
	],
	providers: [TimerService],
	exports: []
})
export class TimesheetModule {}
