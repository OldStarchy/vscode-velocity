// Generated from ../syntaxes/VelocityLexer.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class VelocityLexer extends Lexer {
	public static readonly Code = 1;
	public static readonly EscapeCode = 2;
	public static readonly BlockComment = 3;
	public static readonly LineComment = 4;
	public static readonly Directive = 5;
	public static readonly Reference = 6;
	public static readonly BANG = 7;
	public static readonly LCURLY = 8;
	public static readonly EMPTY1 = 9;
	public static readonly Identifier = 10;
	public static readonly DOT = 11;
	public static readonly EMPTY2 = 12;
	public static readonly RCURLY = 13;
	public static readonly EMPTY3 = 14;
	public static readonly SET = 15;
	public static readonly FOR = 16;
	public static readonly IF = 17;
	public static readonly ELSEIF = 18;
	public static readonly ELSE = 19;
	public static readonly END = 20;
	public static readonly STOP = 21;
	public static readonly PARSE = 22;
	public static readonly DIR_WhiteSpace = 23;
	public static readonly DIRC_WhiteSpace = 24;
	public static readonly NUMBER = 25;
	public static readonly BOOL = 26;
	public static readonly LPAREN = 27;
	public static readonly RPAREN = 28;
	public static readonly DPOINT = 29;
	public static readonly COMMA = 30;
	public static readonly DQUOTE = 31;
	public static readonly STRING = 32;
	public static readonly IN = 33;
	public static readonly LBRAK = 34;
	public static readonly RBRAK = 35;
	public static readonly PLUS = 36;
	public static readonly MINUS = 37;
	public static readonly DIV = 38;
	public static readonly MULT = 39;
	public static readonly MODUL = 40;
	public static readonly AND = 41;
	public static readonly OR = 42;
	public static readonly NOT = 43;
	public static readonly LT = 44;
	public static readonly GT = 45;
	public static readonly LE = 46;
	public static readonly GE = 47;
	public static readonly EQ = 48;
	public static readonly NE = 49;
	public static readonly ATTRIB = 50;
	public static readonly Whitespace = 51;
	public static readonly Newline = 52;
	public static readonly UNKNOWN = 53;
	public static readonly TEXT = 54;
	public static readonly ESCAPETEXT = 55;
	public static readonly COMMENTS = 2;
	public static readonly MODEPREREF = 1;
	public static readonly MODEREF = 2;
	public static readonly MODEREF2 = 3;
	public static readonly MODEREFCURLY = 4;
	public static readonly MODEREFCURLY2 = 5;
	public static readonly MODEPREDIR = 6;
	public static readonly MODEDIR = 7;
	public static readonly MODEDIRCURLY = 8;
	public static readonly MODEVTL = 9;
	public static readonly MODESTR = 10;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN", "COMMENTS",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "MODEPREREF", "MODEREF", "MODEREF2", "MODEREFCURLY", "MODEREFCURLY2", 
		"MODEPREDIR", "MODEDIR", "MODEDIRCURLY", "MODEVTL", "MODESTR",
	];

	public static readonly ruleNames: string[] = [
		"FragIdentifier", "Nondigit", "Digit", "Code", "EscapeCode", "BlockComment", 
		"LineComment", "Directive", "Reference", "BANG", "LCURLY", "EMPTY1", "Identifier", 
		"DOT", "REF_LPAREN", "EMPTY2", "CURLY_Identifier", "CURLY_DOT", "CURLY_LPAREN", 
		"RCURLY", "DIR_LCURLY", "EMPTY3", "SET", "FOR", "IF", "ELSEIF", "ELSE", 
		"END", "STOP", "PARSE", "DIR_LPAREN", "Function", "DIR_WhiteSpace", "DIRC_SET", 
		"DIRC_FOR", "DIRC_IF", "DIRC_ELSEIF", "DIRC_ELSE", "DIRC_END", "DIRC_STOP", 
		"DIRC_PARSE", "DIRC_LPAREN", "DIRC_Function", "DIRC_RCURLY", "DIRC_WhiteSpace", 
		"NUMBER", "BOOL", "VTL_Reference", "LPAREN", "RPAREN", "DPOINT", "COMMA", 
		"DQUOTE", "STRING", "IN", "LBRAK", "RBRAK", "PLUS", "MINUS", "DIV", "MULT", 
		"MODUL", "AND", "OR", "NOT", "LT", "GT", "LE", "GE", "EQ", "NE", "ATTRIB", 
		"Whitespace", "Newline", "UNKNOWN", "VTL_UNKNOWN2", "TEXT", "ESCAPETEXT", 
		"STR_DQUOTE", "STR_Reference",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'#'", "'$'", "'!'", 
		"'{'", undefined, undefined, "'.'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'('", "')'", "'..'", "','", 
		undefined, undefined, "'in'", "'['", "']'", "'+'", "'-'", "'/'", "'*'", 
		"'%'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "Code", "EscapeCode", "BlockComment", "LineComment", "Directive", 
		"Reference", "BANG", "LCURLY", "EMPTY1", "Identifier", "DOT", "EMPTY2", 
		"RCURLY", "EMPTY3", "SET", "FOR", "IF", "ELSEIF", "ELSE", "END", "STOP", 
		"PARSE", "DIR_WhiteSpace", "DIRC_WhiteSpace", "NUMBER", "BOOL", "LPAREN", 
		"RPAREN", "DPOINT", "COMMA", "DQUOTE", "STRING", "IN", "LBRAK", "RBRAK", 
		"PLUS", "MINUS", "DIV", "MULT", "MODUL", "AND", "OR", "NOT", "LT", "GT", 
		"LE", "GE", "EQ", "NE", "ATTRIB", "Whitespace", "Newline", "UNKNOWN", 
		"TEXT", "ESCAPETEXT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(VelocityLexer._LITERAL_NAMES, VelocityLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return VelocityLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(VelocityLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "VelocityLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return VelocityLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return VelocityLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return VelocityLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return VelocityLexer.modeNames; }

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x029\u025C\b\x01" +
		"\b\x01\b\x01\b\x01\b\x01\b\x01\b\x01\b\x01\b\x01\b\x01\b\x01\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04\x0E" +
		"\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04\x13" +
		"\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04\x18" +
		"\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04\x1D" +
		"\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#\t#\x04" +
		"$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+\x04,\t" +
		",\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044\t4\x04" +
		"5\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04=\t=\x04" +
		">\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04F\tF\x04" +
		"G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04O\tO\x04" +
		"P\tP\x04Q\tQ\x03\x02\x03\x02\x03\x02\x07\x02\xB1\n\x02\f\x02\x0E\x02\xB4" +
		"\v\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x06\x05\xBB\n\x05\r\x05" +
		"\x0E\x05\xBC\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07" +
		"\x07\xC6\n\x07\f\x07\x0E\x07\xC9\v\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x03\b\x07\b\xD4\n\b\f\b\x0E\b\xD7\v\b\x03\b" +
		"\x03\b\x03\b\x03\b\x05\b\xDD\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03" +
		" \x03 \x03 \x03!\x03!\x03!\x03!\x03\"\x06\"\u015D\n\"\r\"\x0E\"\u015E" +
		"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03" +
		"$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03" +
		"*\x03*\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03" +
		",\x03-\x03-\x03-\x03-\x03-\x03.\x06.\u01AC\n.\r.\x0E.\u01AD\x03.\x03." +
		"\x03/\x06/\u01B3\n/\r/\x0E/\u01B4\x03/\x03/\x06/\u01B9\n/\r/\x0E/\u01BA" +
		"\x05/\u01BD\n/\x030\x030\x030\x030\x030\x030\x030\x030\x030\x050\u01C8" +
		"\n0\x031\x031\x031\x031\x031\x032\x032\x032\x032\x033\x033\x033\x033\x03" +
		"4\x034\x034\x035\x035\x036\x036\x036\x036\x037\x037\x077\u01E2\n7\f7\x0E" +
		"7\u01E5\v7\x037\x037\x038\x038\x038\x039\x039\x03:\x03:\x03;\x03;\x03" +
		"<\x03<\x03=\x03=\x03>\x03>\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x05@\u01FF" +
		"\n@\x03A\x03A\x03A\x03A\x05A\u0205\nA\x03B\x03B\x03B\x03B\x05B\u020B\n" +
		"B\x03C\x03C\x03C\x05C\u0210\nC\x03D\x03D\x03D\x05D\u0215\nD\x03E\x03E" +
		"\x03E\x03E\x05E\u021B\nE\x03F\x03F\x03F\x03F\x05F\u0221\nF\x03G\x03G\x03" +
		"G\x03G\x05G\u0227\nG\x03H\x03H\x03H\x03H\x05H\u022D\nH\x03I\x03I\x03J" +
		"\x06J\u0232\nJ\rJ\x0EJ\u0233\x03J\x03J\x03K\x03K\x05K\u023A\nK\x03K\x05" +
		"K\u023D\nK\x03K\x03K\x03L\x06L\u0242\nL\rL\x0EL\u0243\x03M\x03M\x03M\x03" +
		"M\x03M\x03N\x06N\u024C\nN\rN\x0EN\u024D\x03O\x03O\x03O\x03P\x03P\x03P" +
		"\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x03Q\x03\xC7\x02\x02R\r\x02\x02\x0F\x02" +
		"\x02\x11\x02\x02\x13\x02\x03\x15\x02\x04\x17\x02\x05\x19\x02\x06\x1B\x02" +
		"\x07\x1D\x02\b\x1F\x02\t!\x02\n#\x02\v%\x02\f\'\x02\r)\x02\x02+\x02\x0E" +
		"-\x02\x02/\x02\x021\x02\x023\x02\x0F5\x02\x027\x02\x109\x02\x11;\x02\x12" +
		"=\x02\x13?\x02\x14A\x02\x15C\x02\x16E\x02\x17G\x02\x18I\x02\x02K\x02\x02" +
		"M\x02\x19O\x02\x02Q\x02\x02S\x02\x02U\x02\x02W\x02\x02Y\x02\x02[\x02\x02" +
		"]\x02\x02_\x02\x02a\x02\x02c\x02\x02e\x02\x1Ag\x02\x1Bi\x02\x1Ck\x02\x02" +
		"m\x02\x1Do\x02\x1Eq\x02\x1Fs\x02 u\x02!w\x02\"y\x02#{\x02$}\x02%\x7F\x02" +
		"&\x81\x02\'\x83\x02(\x85\x02)\x87\x02*\x89\x02+\x8B\x02,\x8D\x02-\x8F" +
		"\x02.\x91\x02/\x93\x020\x95\x021\x97\x022\x99\x023\x9B\x024\x9D\x025\x9F" +
		"\x026\xA1\x027\xA3\x02\x02\xA5\x028\xA7\x029\xA9\x02\x02\xAB\x02\x02\r" +
		"\x02\x03\x04\x05\x06\x07\b\t\n\v\f\n\x05\x02C\\aac|\x03\x022;\x04\x02" +
		"%&^^\x04\x02\f\f\x0F\x0F\x05\x02\v\f\x0F\x0F\"\"\x04\x02))``\x04\x02\v" +
		"\v\"\"\x05\x02$$&&^^\x02\u026A\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02" +
		"\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02" +
		"\x02\x02\x02\x1D\x03\x02\x02\x02\x03\x1F\x03\x02\x02\x02\x03!\x03\x02" +
		"\x02\x02\x03#\x03\x02\x02\x02\x04%\x03\x02\x02\x02\x05\'\x03\x02\x02\x02" +
		"\x05)\x03\x02\x02\x02\x05+\x03\x02\x02\x02\x06-\x03\x02\x02\x02\x07/\x03" +
		"\x02\x02\x02\x071\x03\x02\x02\x02\x073\x03\x02\x02\x02\b5\x03\x02\x02" +
		"\x02\b7\x03\x02\x02\x02\t9\x03\x02\x02\x02\t;\x03\x02\x02\x02\t=\x03\x02" +
		"\x02\x02\t?\x03\x02\x02\x02\tA\x03\x02\x02\x02\tC\x03\x02\x02\x02\tE\x03" +
		"\x02\x02\x02\tG\x03\x02\x02\x02\tI\x03\x02\x02\x02\tK\x03\x02\x02\x02" +
		"\tM\x03\x02\x02\x02\nO\x03\x02\x02\x02\nQ\x03\x02\x02\x02\nS\x03\x02\x02" +
		"\x02\nU\x03\x02\x02\x02\nW\x03\x02\x02\x02\nY\x03\x02\x02\x02\n[\x03\x02" +
		"\x02\x02\n]\x03\x02\x02\x02\n_\x03\x02\x02\x02\na\x03\x02\x02\x02\nc\x03" +
		"\x02\x02\x02\ne\x03\x02\x02\x02\vg\x03\x02\x02\x02\vi\x03\x02\x02\x02" +
		"\vk\x03\x02\x02\x02\vm\x03\x02\x02\x02\vo\x03\x02\x02\x02\vq\x03\x02\x02" +
		"\x02\vs\x03\x02\x02\x02\vu\x03\x02\x02\x02\vw\x03\x02\x02\x02\vy\x03\x02" +
		"\x02\x02\v{\x03\x02\x02\x02\v}\x03\x02\x02\x02\v\x7F\x03\x02\x02\x02\v" +
		"\x81\x03\x02\x02\x02\v\x83\x03\x02\x02\x02\v\x85\x03\x02\x02\x02\v\x87" +
		"\x03\x02\x02\x02\v\x89\x03\x02\x02\x02\v\x8B\x03\x02\x02\x02\v\x8D\x03" +
		"\x02\x02\x02\v\x8F\x03\x02\x02\x02\v\x91\x03\x02\x02\x02\v\x93\x03\x02" +
		"\x02\x02\v\x95\x03\x02\x02\x02\v\x97\x03\x02\x02\x02\v\x99\x03\x02\x02" +
		"\x02\v\x9B\x03\x02\x02\x02\v\x9D\x03\x02\x02\x02\v\x9F\x03\x02\x02\x02" +
		"\v\xA1\x03\x02\x02\x02\v\xA3\x03\x02\x02\x02\f\xA5\x03\x02\x02\x02\f\xA7" +
		"\x03\x02\x02\x02\f\xA9\x03\x02\x02\x02\f\xAB\x03\x02\x02\x02\r\xAD\x03" +
		"\x02\x02\x02\x0F\xB5\x03\x02\x02\x02\x11\xB7\x03\x02\x02\x02\x13\xBA\x03" +
		"\x02\x02\x02\x15\xBE\x03\x02\x02\x02\x17\xC1\x03\x02\x02\x02\x19\xCF\x03" +
		"\x02\x02\x02\x1B\xE0\x03\x02\x02\x02\x1D\xE4\x03\x02\x02\x02\x1F\xE8\x03" +
		"\x02\x02\x02!\xEA\x03\x02\x02\x02#\xEE\x03\x02\x02\x02%\xF3\x03\x02\x02" +
		"\x02\'\xF7\x03\x02\x02\x02)\xFB\x03\x02\x02\x02+\u0100\x03\x02\x02\x02" +
		"-\u0105\x03\x02\x02\x02/\u010A\x03\x02\x02\x021\u010F\x03\x02\x02\x02" +
		"3\u0114\x03\x02\x02\x025\u0118\x03\x02\x02\x027\u011D\x03\x02\x02\x02" +
		"9\u0122\x03\x02\x02\x02;\u0126\x03\x02\x02\x02=\u012E\x03\x02\x02\x02" +
		"?\u0131\x03\x02\x02\x02A\u0138\x03\x02\x02\x02C\u013F\x03\x02\x02\x02" +
		"E\u0145\x03\x02\x02\x02G\u014C\x03\x02\x02\x02I\u0152\x03\x02\x02\x02" +
		"K\u0157\x03\x02\x02\x02M\u015C\x03\x02\x02\x02O\u0162\x03\x02\x02\x02" +
		"Q\u0168\x03\x02\x02\x02S\u0172\x03\x02\x02\x02U\u0177\x03\x02\x02\x02" +
		"W\u0180\x03\x02\x02\x02Y\u0187\x03\x02\x02\x02[\u018D\x03\x02\x02\x02" +
		"]\u0194\x03\x02\x02\x02_\u019C\x03\x02\x02\x02a\u01A1\x03\x02\x02\x02" +
		"c\u01A5\x03\x02\x02\x02e\u01AB\x03\x02\x02\x02g\u01B2\x03\x02\x02\x02" +
		"i\u01C7\x03\x02\x02\x02k\u01C9\x03\x02\x02\x02m\u01CE\x03\x02\x02\x02" +
		"o\u01D2\x03\x02\x02\x02q\u01D6\x03\x02\x02\x02s\u01D9\x03\x02\x02\x02" +
		"u\u01DB\x03\x02\x02\x02w\u01DF\x03\x02\x02\x02y\u01E8\x03\x02\x02\x02" +
		"{\u01EB\x03\x02\x02\x02}\u01ED\x03\x02\x02\x02\x7F\u01EF\x03\x02\x02\x02" +
		"\x81\u01F1\x03\x02\x02\x02\x83\u01F3\x03\x02\x02\x02\x85\u01F5\x03\x02" +
		"\x02\x02\x87\u01F7\x03\x02\x02\x02\x89\u01FE\x03\x02\x02\x02\x8B\u0204" +
		"\x03\x02\x02\x02\x8D\u020A\x03\x02\x02\x02\x8F\u020F\x03\x02\x02\x02\x91" +
		"\u0214\x03\x02\x02\x02\x93\u021A\x03\x02\x02\x02\x95\u0220\x03\x02\x02" +
		"\x02\x97\u0226\x03\x02\x02\x02\x99\u022C\x03\x02\x02\x02\x9B\u022E\x03" +
		"\x02\x02\x02\x9D\u0231\x03\x02\x02\x02\x9F\u023C\x03\x02\x02\x02\xA1\u0241" +
		"\x03\x02\x02\x02\xA3\u0245\x03\x02\x02\x02\xA5\u024B\x03\x02\x02\x02\xA7" +
		"\u024F\x03\x02\x02\x02\xA9\u0252\x03\x02\x02\x02\xAB\u0257\x03\x02\x02" +
		"\x02\xAD\xB2\x05\x0F\x03\x02\xAE\xB1\x05\x0F\x03\x02\xAF\xB1\x05\x11\x04" +
		"\x02\xB0\xAE\x03\x02\x02\x02\xB0\xAF\x03\x02\x02\x02\xB1\xB4\x03\x02\x02" +
		"\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\x0E\x03\x02\x02" +
		"\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB6\t\x02\x02\x02\xB6\x10\x03\x02\x02" +
		"\x02\xB7\xB8\t\x03\x02\x02\xB8\x12\x03\x02\x02\x02\xB9\xBB\n\x04\x02\x02" +
		"\xBA\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02" +
		"\xBC\xBD\x03\x02\x02\x02\xBD\x14\x03\x02\x02\x02\xBE\xBF\x07^\x02\x02" +
		"\xBF\xC0\v\x02\x02\x02\xC0\x16\x03\x02\x02\x02\xC1\xC2\x07%\x02\x02\xC2" +
		"\xC3\x07,\x02\x02\xC3\xC7\x03\x02\x02\x02\xC4\xC6\v\x02\x02\x02\xC5\xC4" +
		"\x03\x02\x02\x02\xC6\xC9\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC7\xC5" +
		"\x03\x02\x02\x02\xC8\xCA\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xCA\xCB" +
		"\x07,\x02\x02\xCB\xCC\x07%\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCE\b\x07" +
		"\x02\x02\xCE\x18\x03\x02\x02\x02\xCF\xD0\x07%\x02\x02\xD0\xD1\x07%\x02" +
		"\x02\xD1\xD5\x03\x02\x02\x02\xD2\xD4\n\x05\x02\x02\xD3\xD2\x03\x02\x02" +
		"\x02\xD4\xD7\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02" +
		"\x02\xD6\xDC\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD8\xDD\x07\f\x02" +
		"\x02\xD9\xDA\x07\x0F\x02\x02\xDA\xDD\x07\f\x02\x02\xDB\xDD\x07\x02\x02" +
		"\x03\xDC\xD8\x03\x02\x02\x02\xDC\xD9\x03\x02\x02\x02\xDC\xDB\x03\x02\x02" +
		"\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDF\b\b\x02\x02\xDF\x1A\x03\x02\x02\x02" +
		"\xE0\xE1\x07%\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE3\b\t\x03\x02\xE3" +
		"\x1C\x03\x02\x02\x02\xE4\xE5\x07&\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6" +
		"\xE7\b\n\x04\x02\xE7\x1E\x03\x02\x02\x02\xE8\xE9\x07#\x02\x02\xE9 \x03" +
		"\x02\x02\x02\xEA\xEB\x07}\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xED\b\f" +
		"\x05\x02\xED\"\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF0\x03\x02" +
		"\x02\x02\xF0\xF1\b\r\x06\x02\xF1\xF2\b\r\x07\x02\xF2$\x03\x02\x02\x02" +
		"\xF3\xF4\x05\r\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF6\b\x0E\b\x02\xF6" +
		"&\x03\x02\x02\x02\xF7\xF8\x070\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA" +
		"\b\x0F\x07\x02\xFA(\x03\x02\x02\x02\xFB\xFC\x07*\x02\x02\xFC\xFD\x03\x02" +
		"\x02\x02\xFD\xFE\b\x10\t\x02\xFE\xFF\b\x10\n\x02\xFF*\x03\x02\x02\x02" +
		"\u0100\u0101\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0103\b" +
		"\x11\x06\x02\u0103\u0104\b\x11\v\x02\u0104,\x03\x02\x02\x02\u0105\u0106" +
		"\x05\r\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0108\b\x12\f\x02\u0108" +
		"\u0109\b\x12\r\x02\u0109.\x03\x02\x02\x02\u010A\u010B\x070\x02\x02\u010B" +
		"\u010C\x03\x02\x02\x02\u010C\u010D\b\x13\x0E\x02\u010D\u010E\b\x13\x05" +
		"\x02\u010E0\x03\x02\x02\x02\u010F\u0110\x07*\x02\x02\u0110\u0111\x03\x02" +
		"\x02\x02\u0111\u0112\b\x14\t\x02\u0112\u0113\b\x14\n\x02\u01132\x03\x02" +
		"\x02\x02\u0114\u0115\x07\x7F\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116" +
		"\u0117\b\x15\v\x02\u01174\x03\x02\x02\x02\u0118\u0119\x07}\x02\x02\u0119" +
		"\u011A\x03\x02\x02\x02\u011A\u011B\b\x16\x0F\x02\u011B\u011C\b\x16\x10" +
		"\x02\u011C6\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u011F\x03" +
		"\x02\x02\x02\u011F\u0120\b\x17\x06\x02\u0120\u0121\b\x17\x11\x02\u0121" +
		"8\x03\x02\x02\x02\u0122\u0123\x07u\x02\x02\u0123\u0124\x07g\x02\x02\u0124" +
		"\u0125\x07v\x02\x02\u0125:\x03\x02\x02\x02\u0126\u0127\x07h\x02\x02\u0127" +
		"\u0128\x07q\x02\x02\u0128\u0129\x07t\x02\x02\u0129\u012A\x07g\x02\x02" +
		"\u012A\u012B\x07c\x02\x02\u012B\u012C\x07e\x02\x02\u012C\u012D\x07j\x02" +
		"\x02\u012D<\x03\x02\x02\x02\u012E\u012F\x07k\x02\x02\u012F\u0130\x07h" +
		"\x02\x02\u0130>\x03\x02\x02\x02\u0131\u0132\x07g\x02\x02\u0132\u0133\x07" +
		"n\x02\x02\u0133\u0134\x07u\x02\x02\u0134\u0135\x07g\x02\x02\u0135\u0136" +
		"\x07k\x02\x02\u0136\u0137\x07h\x02\x02\u0137@\x03\x02\x02\x02\u0138\u0139" +
		"\x07g\x02\x02\u0139\u013A\x07n\x02\x02\u013A\u013B\x07u\x02\x02\u013B" +
		"\u013C\x07g\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013E\b\x1C\v\x02" +
		"\u013EB\x03\x02\x02\x02\u013F\u0140\x07g\x02\x02\u0140\u0141\x07p\x02" +
		"\x02\u0141\u0142\x07f\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0144" +
		"\b\x1D\v\x02\u0144D\x03\x02\x02\x02\u0145\u0146\x07u\x02\x02\u0146\u0147" +
		"\x07v\x02\x02\u0147\u0148\x07q\x02\x02\u0148\u0149\x07r\x02\x02\u0149" +
		"\u014A\x03\x02\x02\x02\u014A\u014B\b\x1E\v\x02\u014BF\x03\x02\x02\x02" +
		"\u014C\u014D\x07r\x02\x02\u014D\u014E\x07c\x02\x02\u014E\u014F\x07t\x02" +
		"\x02\u014F\u0150\x07u\x02\x02\u0150\u0151\x07g\x02\x02\u0151H\x03\x02" +
		"\x02\x02\u0152\u0153\x07*\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0155" +
		"\b \t\x02\u0155\u0156\b \x12\x02\u0156J\x03\x02\x02\x02\u0157\u0158\x05" +
		"\r\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015A\b!\f\x02\u015AL\x03" +
		"\x02\x02\x02\u015B\u015D\t\x06\x02\x02\u015C\u015B\x03\x02\x02\x02\u015D" +
		"\u015E\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015E\u015F\x03\x02" +
		"\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0161\b\"\x06\x02\u0161N\x03" +
		"\x02\x02\x02\u0162\u0163\x07u\x02\x02\u0163\u0164\x07g\x02\x02\u0164\u0165" +
		"\x07v\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0167\b#\x13\x02\u0167" +
		"P\x03\x02\x02\x02\u0168\u0169\x07h\x02\x02\u0169\u016A\x07q\x02\x02\u016A" +
		"\u016B\x07t\x02\x02\u016B\u016C\x07g\x02\x02\u016C\u016D\x07c\x02\x02" +
		"\u016D\u016E\x07e\x02\x02\u016E\u016F\x07j\x02\x02\u016F\u0170\x03\x02" +
		"\x02\x02\u0170\u0171\b$\x14\x02\u0171R\x03\x02\x02\x02\u0172\u0173\x07" +
		"k\x02\x02\u0173\u0174\x07h\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0176" +
		"\b%\x15\x02\u0176T\x03\x02\x02\x02\u0177\u0178\x07g\x02\x02\u0178\u0179" +
		"\x07n\x02\x02\u0179\u017A\x07u\x02\x02\u017A\u017B\x07g\x02\x02\u017B" +
		"\u017C\x07k\x02\x02\u017C\u017D\x07h\x02\x02\u017D\u017E\x03\x02\x02\x02" +
		"\u017E\u017F\b&\x16\x02\u017FV\x03\x02\x02\x02\u0180\u0181\x07g\x02\x02" +
		"\u0181\u0182\x07n\x02\x02\u0182\u0183\x07u\x02\x02\u0183\u0184\x07g\x02" +
		"\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0186\b\'\x17\x02\u0186X\x03\x02" +
		"\x02\x02\u0187\u0188\x07g\x02\x02\u0188\u0189\x07p\x02\x02\u0189\u018A" +
		"\x07f\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018C\b(\x18\x02\u018C" +
		"Z\x03\x02\x02\x02\u018D\u018E\x07u\x02\x02\u018E\u018F\x07v\x02\x02\u018F" +
		"\u0190\x07q\x02\x02\u0190\u0191\x07r\x02\x02\u0191\u0192\x03\x02\x02\x02" +
		"\u0192\u0193\b)\x19\x02\u0193\\\x03\x02\x02\x02\u0194\u0195\x07r\x02\x02" +
		"\u0195\u0196\x07c\x02\x02\u0196\u0197\x07t\x02\x02\u0197\u0198\x07u\x02" +
		"\x02\u0198\u0199\x07g\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019B" +
		"\b*\x1A\x02\u019B^\x03\x02\x02\x02\u019C\u019D\x07*\x02\x02\u019D\u019E" +
		"\x03\x02\x02\x02\u019E\u019F\b+\t\x02\u019F\u01A0\b+\n\x02\u01A0`\x03" +
		"\x02\x02\x02\u01A1\u01A2\x05\r\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3" +
		"\u01A4\b,\f\x02\u01A4b\x03\x02\x02\x02\u01A5\u01A6\x07\x7F\x02\x02\u01A6" +
		"\u01A7\x03\x02\x02\x02\u01A7\u01A8\b-\x1B\x02\u01A8\u01A9\b-\v\x02\u01A9" +
		"d\x03\x02\x02\x02\u01AA\u01AC\t\x06\x02\x02\u01AB\u01AA\x03\x02\x02\x02" +
		"\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AD\u01AE\x03" +
		"\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B0\b.\x06\x02\u01B0" +
		"f\x03\x02\x02\x02\u01B1\u01B3\x05\x11\x04\x02\u01B2\u01B1\x03\x02\x02" +
		"\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B4\u01B5" +
		"\x03\x02\x02\x02\u01B5\u01BC\x03\x02\x02\x02\u01B6\u01B8\x070\x02\x02" +
		"\u01B7\u01B9\x05\x11\x04\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9\u01BA\x03" +
		"\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB" +
		"\u01BD\x03\x02\x02\x02\u01BC\u01B6\x03\x02\x02\x02\u01BC\u01BD\x03\x02" +
		"\x02\x02\u01BDh\x03\x02\x02\x02\u01BE\u01BF\x07v\x02\x02\u01BF\u01C0\x07" +
		"t\x02\x02\u01C0\u01C1\x07w\x02\x02\u01C1\u01C8\x07g\x02\x02\u01C2\u01C3" +
		"\x07h\x02\x02\u01C3\u01C4\x07c\x02\x02\u01C4\u01C5\x07n\x02\x02\u01C5" +
		"\u01C6\x07u\x02\x02\u01C6\u01C8\x07g\x02\x02\u01C7\u01BE\x03\x02\x02\x02" +
		"\u01C7\u01C2\x03\x02\x02\x02\u01C8j\x03\x02\x02\x02\u01C9\u01CA\x07&\x02" +
		"\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CC\b1\x1C\x02\u01CC\u01CD\b" +
		"1\x04\x02\u01CDl\x03\x02\x02\x02\u01CE\u01CF\x07*\x02\x02\u01CF\u01D0" +
		"\x03\x02\x02\x02\u01D0\u01D1\b2\n\x02\u01D1n\x03\x02\x02\x02\u01D2\u01D3" +
		"\x07+\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D5\b3\v\x02\u01D5p" +
		"\x03\x02\x02\x02\u01D6\u01D7\x070\x02\x02\u01D7\u01D8\x070\x02\x02\u01D8" +
		"r\x03\x02\x02\x02\u01D9\u01DA\x07.\x02\x02\u01DAt\x03\x02\x02\x02\u01DB" +
		"\u01DC\x07$\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01DE\b6\x1D\x02" +
		"\u01DEv\x03\x02\x02\x02\u01DF\u01E3\x07)\x02\x02\u01E0\u01E2\t\x07\x02" +
		"\x02\u01E1\u01E0\x03\x02\x02\x02\u01E2\u01E5\x03\x02\x02\x02\u01E3\u01E1" +
		"\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4\u01E6\x03\x02\x02\x02" +
		"\u01E5\u01E3\x03\x02\x02\x02\u01E6\u01E7\x07)\x02\x02\u01E7x\x03\x02\x02" +
		"\x02\u01E8\u01E9\x07k\x02\x02\u01E9\u01EA\x07p\x02\x02\u01EAz\x03\x02" +
		"\x02\x02\u01EB\u01EC\x07]\x02\x02\u01EC|\x03\x02\x02\x02\u01ED\u01EE\x07" +
		"_\x02\x02\u01EE~\x03\x02\x02\x02\u01EF\u01F0\x07-\x02\x02\u01F0\x80\x03" +
		"\x02\x02\x02\u01F1\u01F2\x07/\x02\x02\u01F2\x82\x03\x02\x02\x02\u01F3" +
		"\u01F4\x071\x02\x02\u01F4\x84\x03\x02\x02\x02\u01F5\u01F6\x07,\x02\x02" +
		"\u01F6\x86\x03\x02\x02\x02\u01F7\u01F8\x07\'\x02\x02\u01F8\x88\x03\x02" +
		"\x02\x02\u01F9\u01FA\x07(\x02\x02\u01FA\u01FF\x07(\x02\x02\u01FB\u01FC" +
		"\x07c\x02\x02\u01FC\u01FD\x07p\x02\x02\u01FD\u01FF\x07f\x02\x02\u01FE" +
		"\u01F9\x03\x02\x02\x02\u01FE\u01FB\x03\x02\x02\x02\u01FF\x8A\x03\x02\x02" +
		"\x02\u0200\u0201\x07~\x02\x02\u0201\u0205\x07~\x02\x02\u0202\u0203\x07" +
		"q\x02\x02\u0203\u0205\x07t\x02\x02\u0204\u0200\x03\x02\x02\x02\u0204\u0202" +
		"\x03\x02\x02\x02\u0205\x8C\x03\x02\x02\x02\u0206\u020B\x07#\x02\x02\u0207" +
		"\u0208\x07p\x02\x02\u0208\u0209\x07q\x02\x02\u0209\u020B\x07v\x02\x02" +
		"\u020A\u0206\x03\x02\x02\x02\u020A\u0207\x03\x02\x02\x02\u020B\x8E\x03" +
		"\x02\x02\x02\u020C\u0210\x07>\x02\x02\u020D\u020E\x07n\x02\x02\u020E\u0210" +
		"\x07v\x02\x02\u020F\u020C\x03\x02\x02\x02\u020F\u020D\x03\x02\x02\x02" +
		"\u0210\x90\x03\x02\x02\x02\u0211\u0215\x07@\x02\x02\u0212\u0213\x07i\x02" +
		"\x02\u0213\u0215\x07v\x02\x02\u0214\u0211\x03\x02\x02\x02\u0214\u0212" +
		"\x03\x02\x02\x02\u0215\x92\x03\x02\x02\x02\u0216\u0217\x07>\x02\x02\u0217" +
		"\u021B\x07?\x02\x02\u0218\u0219\x07n\x02\x02\u0219\u021B\x07g\x02\x02" +
		"\u021A\u0216\x03\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021B\x94\x03" +
		"\x02\x02\x02\u021C\u021D\x07@\x02\x02\u021D\u0221\x07?\x02\x02\u021E\u021F" +
		"\x07i\x02\x02\u021F\u0221\x07g\x02\x02\u0220\u021C\x03\x02\x02\x02\u0220" +
		"\u021E\x03\x02\x02\x02\u0221\x96\x03\x02\x02\x02\u0222\u0223\x07?\x02" +
		"\x02\u0223\u0227\x07?\x02\x02\u0224\u0225\x07g\x02\x02\u0225\u0227\x07" +
		"s\x02\x02\u0226\u0222\x03\x02\x02\x02\u0226\u0224\x03\x02\x02\x02\u0227" +
		"\x98\x03\x02\x02\x02\u0228\u0229\x07#\x02\x02\u0229\u022D\x07?\x02\x02" +
		"\u022A\u022B\x07p\x02\x02\u022B\u022D\x07g\x02\x02\u022C\u0228\x03\x02" +
		"\x02\x02\u022C\u022A\x03\x02\x02\x02\u022D\x9A\x03\x02\x02\x02\u022E\u022F" +
		"\x07?\x02\x02\u022F\x9C\x03\x02\x02\x02\u0230\u0232\t\b\x02\x02\u0231" +
		"\u0230\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0231\x03\x02" +
		"\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0235";
	private static readonly _serializedATNSegment1: string =
		"\x03\x02\x02\x02\u0235\u0236\bJ\x06\x02\u0236\x9E\x03\x02\x02\x02\u0237" +
		"\u0239\x07\x0F\x02\x02\u0238\u023A\x07\f\x02\x02\u0239\u0238\x03\x02\x02" +
		"\x02\u0239\u023A\x03\x02\x02\x02\u023A\u023D\x03\x02\x02\x02\u023B\u023D" +
		"\x07\f\x02\x02\u023C\u0237\x03\x02\x02\x02\u023C\u023B\x03\x02\x02\x02" +
		"\u023D\u023E\x03\x02\x02\x02\u023E\u023F\bK\x06\x02\u023F\xA0\x03\x02" +
		"\x02\x02\u0240\u0242\t\x02\x02\x02\u0241\u0240\x03\x02\x02\x02\u0242\u0243" +
		"\x03\x02\x02\x02\u0243\u0241\x03\x02\x02\x02\u0243\u0244\x03\x02\x02\x02" +
		"\u0244\xA2\x03\x02\x02\x02\u0245\u0246\x07%\x02\x02\u0246\u0247\x03\x02" +
		"\x02\x02\u0247\u0248\bM\x1E\x02\u0248\u0249\bM\x11\x02\u0249\xA4\x03\x02" +
		"\x02\x02\u024A\u024C\n\t\x02\x02\u024B\u024A\x03\x02\x02\x02\u024C\u024D" +
		"\x03\x02\x02\x02\u024D\u024B\x03\x02\x02\x02\u024D\u024E\x03\x02\x02\x02" +
		"\u024E\xA6\x03\x02\x02\x02\u024F\u0250\x07^\x02\x02\u0250\u0251\v\x02" +
		"\x02\x02\u0251\xA8\x03\x02\x02\x02\u0252\u0253\x07$\x02\x02\u0253\u0254" +
		"\x03\x02\x02\x02\u0254\u0255\bP\x1F\x02\u0255\u0256\bP\v\x02\u0256\xAA" +
		"\x03\x02\x02\x02\u0257\u0258\x07&\x02\x02\u0258\u0259\x03\x02\x02\x02" +
		"\u0259\u025A\bQ\x1C\x02\u025A\u025B\bQ\x04\x02\u025B\xAC\x03\x02\x02\x02" +
		"(\x02\x03\x04\x05\x06\x07\b\t\n\v\f\xB0\xB2\xBC\xC7\xD5\xDC\u015E\u01AD" +
		"\u01B4\u01BA\u01BC\u01C7\u01E3\u01FE\u0204\u020A\u020F\u0214\u021A\u0220" +
		"\u0226\u022C\u0233\u0239\u023C\u0243\u024D \x02\x04\x02\x07\b\x02\x07" +
		"\x03\x02\x04\x06\x02\b\x02\x02\x04\x04\x02\x04\x05\x02\t\x1D\x02\x07\v" +
		"\x02\x06\x02\x02\t\f\x02\x04\x07\x02\t\r\x02\t\n\x02\x04\n\x02\x04\t\x02" +
		"\x04\v\x02\t\x11\x02\t\x12\x02\t\x13\x02\t\x14\x02\t\x15\x02\t\x16\x02" +
		"\t\x17\x02\t\x18\x02\t\x0F\x02\t\b\x02\x07\f\x02\t\x07\x02\t!\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			VelocityLexer._serializedATNSegment0,
			VelocityLexer._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!VelocityLexer.__ATN) {
			VelocityLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(VelocityLexer._serializedATN));
		}

		return VelocityLexer.__ATN;
	}

}

