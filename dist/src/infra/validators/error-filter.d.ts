import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
declare class ErrorFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
export default ErrorFilter;
