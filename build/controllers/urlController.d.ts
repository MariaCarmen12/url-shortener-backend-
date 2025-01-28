import { Request, Response } from 'express';
export declare const shortenUrl: (req: Request, res: Response) => Promise<void>;
export declare const redirectUrl: (req: Request, res: Response) => Promise<void>;
