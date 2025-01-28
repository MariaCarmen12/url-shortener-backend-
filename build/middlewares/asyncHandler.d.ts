import { Request, Response, NextFunction } from 'express';
declare const asyncHandler: (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default asyncHandler;
