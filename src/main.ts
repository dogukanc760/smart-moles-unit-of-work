import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@neStjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './libs/exceptionHandler/all-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const {httpAdapter} = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionFilter(httpAdapter));
  app.setGlobalPrefix('v1/api');
  const config = new DocumentBuilder()
  .setTitle('Smartmoles Cloud Services')
  .setDescription('For All Solutions')
  .setVersion('1.1')
  .addTag('Api v1 Endpoints')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/documents', app, document);
  await app.listen(3000);
}
bootstrap();
