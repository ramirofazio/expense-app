import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ReportType, data } from './data';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }

  @Get(':id')
  getReportById(@Param('id') id: string, @Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
  }

  @Post()
  createReport() {
    return 'Created';
  }

  @Put(':id')
  updateReport() {
    return 'Updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'deleted';
  }
}
