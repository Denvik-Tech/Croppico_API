/* A Bison parser, made by GNU Bison 3.7.5.  */

/* Bison interface for Yacc-like parsers in C

   Copyright (C) 1984, 1989-1990, 2000-2015, 2018-2021 Free Software Foundation,
   Inc.

   This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.

   You should have received a copy of the GNU General Public License
   along with this program.  If not, see <http://www.gnu.org/licenses/>.  */

/* As a special exception, you may create a larger work that contains
   part or all of the Bison parser skeleton and distribute that work
   under terms of your choice, so long as that work isn't itself a
   parser generator using the skeleton or a modified version thereof
   as a parser skeleton.  Alternatively, if you modify or redistribute
   the parser skeleton itself, you may (at your option) remove this
   special exception, which will cause the skeleton and the resulting
   Bison output files to be licensed under the GNU General Public
   License without this special exception.

   This special exception was added by the Free Software Foundation in
   version 2.2 of Bison.  */

/* DO NOT RELY ON FEATURES THAT ARE NOT DOCUMENTED in the manual,
   especially those whose name start with YY_ or yy_.  They are
   private implementation details that can be changed or removed.  */

#ifndef YY_YY_CONFIG_GRAM_H_INCLUDED
# define YY_YY_CONFIG_GRAM_H_INCLUDED
/* Debug traces.  */
#ifndef YYDEBUG
# define YYDEBUG 0
#endif
#if YYDEBUG
extern int yydebug;
#endif

/* Token kinds.  */
#ifndef YYTOKENTYPE
# define YYTOKENTYPE
  enum yytokentype
  {
    YYEMPTY = -2,
    YYEOF = 0,                     /* "end of file"  */
    YYerror = 256,                 /* error  */
    YYUNDEF = 257,                 /* "invalid token"  */
    K_READ = 258,                  /* K_READ  */
    K_WRITE = 259,                 /* K_WRITE  */
    K_READ_LO = 260,               /* K_READ_LO  */
    K_READ_HI = 261,               /* K_READ_HI  */
    K_WRITE_LO = 262,              /* K_WRITE_LO  */
    K_WRITE_HI = 263,              /* K_WRITE_HI  */
    K_LOADPAGE_LO = 264,           /* K_LOADPAGE_LO  */
    K_LOADPAGE_HI = 265,           /* K_LOADPAGE_HI  */
    K_LOAD_EXT_ADDR = 266,         /* K_LOAD_EXT_ADDR  */
    K_WRITEPAGE = 267,             /* K_WRITEPAGE  */
    K_CHIP_ERASE = 268,            /* K_CHIP_ERASE  */
    K_PGM_ENABLE = 269,            /* K_PGM_ENABLE  */
    K_MEMORY = 270,                /* K_MEMORY  */
    K_PAGE_SIZE = 271,             /* K_PAGE_SIZE  */
    K_PAGED = 272,                 /* K_PAGED  */
    K_BAUDRATE = 273,              /* K_BAUDRATE  */
    K_BS2 = 274,                   /* K_BS2  */
    K_BUFF = 275,                  /* K_BUFF  */
    K_CHIP_ERASE_DELAY = 276,      /* K_CHIP_ERASE_DELAY  */
    K_CONNTYPE = 277,              /* K_CONNTYPE  */
    K_DEDICATED = 278,             /* K_DEDICATED  */
    K_DEFAULT_BITCLOCK = 279,      /* K_DEFAULT_BITCLOCK  */
    K_DEFAULT_PARALLEL = 280,      /* K_DEFAULT_PARALLEL  */
    K_DEFAULT_PROGRAMMER = 281,    /* K_DEFAULT_PROGRAMMER  */
    K_DEFAULT_SAFEMODE = 282,      /* K_DEFAULT_SAFEMODE  */
    K_DEFAULT_SERIAL = 283,        /* K_DEFAULT_SERIAL  */
    K_DESC = 284,                  /* K_DESC  */
    K_FAMILY_ID = 285,             /* K_FAMILY_ID  */
    K_DEVICECODE = 286,            /* K_DEVICECODE  */
    K_STK500_DEVCODE = 287,        /* K_STK500_DEVCODE  */
    K_AVR910_DEVCODE = 288,        /* K_AVR910_DEVCODE  */
    K_EEPROM = 289,                /* K_EEPROM  */
    K_ERRLED = 290,                /* K_ERRLED  */
    K_FLASH = 291,                 /* K_FLASH  */
    K_ID = 292,                    /* K_ID  */
    K_IO = 293,                    /* K_IO  */
    K_LOADPAGE = 294,              /* K_LOADPAGE  */
    K_MAX_WRITE_DELAY = 295,       /* K_MAX_WRITE_DELAY  */
    K_MCU_BASE = 296,              /* K_MCU_BASE  */
    K_MIN_WRITE_DELAY = 297,       /* K_MIN_WRITE_DELAY  */
    K_MISO = 298,                  /* K_MISO  */
    K_MOSI = 299,                  /* K_MOSI  */
    K_NUM_PAGES = 300,             /* K_NUM_PAGES  */
    K_NVM_BASE = 301,              /* K_NVM_BASE  */
    K_OCD_BASE = 302,              /* K_OCD_BASE  */
    K_OCDREV = 303,                /* K_OCDREV  */
    K_OFFSET = 304,                /* K_OFFSET  */
    K_PAGEL = 305,                 /* K_PAGEL  */
    K_PARALLEL = 306,              /* K_PARALLEL  */
    K_PARENT = 307,                /* K_PARENT  */
    K_PART = 308,                  /* K_PART  */
    K_PGMLED = 309,                /* K_PGMLED  */
    K_PROGRAMMER = 310,            /* K_PROGRAMMER  */
    K_PSEUDO = 311,                /* K_PSEUDO  */
    K_PWROFF_AFTER_WRITE = 312,    /* K_PWROFF_AFTER_WRITE  */
    K_RDYLED = 313,                /* K_RDYLED  */
    K_READBACK_P1 = 314,           /* K_READBACK_P1  */
    K_READBACK_P2 = 315,           /* K_READBACK_P2  */
    K_READMEM = 316,               /* K_READMEM  */
    K_RESET = 317,                 /* K_RESET  */
    K_RETRY_PULSE = 318,           /* K_RETRY_PULSE  */
    K_SERIAL = 319,                /* K_SERIAL  */
    K_SCK = 320,                   /* K_SCK  */
    K_SIGNATURE = 321,             /* K_SIGNATURE  */
    K_SIZE = 322,                  /* K_SIZE  */
    K_USB = 323,                   /* K_USB  */
    K_USBDEV = 324,                /* K_USBDEV  */
    K_USBSN = 325,                 /* K_USBSN  */
    K_USBPID = 326,                /* K_USBPID  */
    K_USBPRODUCT = 327,            /* K_USBPRODUCT  */
    K_USBVENDOR = 328,             /* K_USBVENDOR  */
    K_USBVID = 329,                /* K_USBVID  */
    K_TYPE = 330,                  /* K_TYPE  */
    K_VCC = 331,                   /* K_VCC  */
    K_VFYLED = 332,                /* K_VFYLED  */
    K_NO = 333,                    /* K_NO  */
    K_YES = 334,                   /* K_YES  */
    K_TIMEOUT = 335,               /* K_TIMEOUT  */
    K_STABDELAY = 336,             /* K_STABDELAY  */
    K_CMDEXEDELAY = 337,           /* K_CMDEXEDELAY  */
    K_HVSPCMDEXEDELAY = 338,       /* K_HVSPCMDEXEDELAY  */
    K_SYNCHLOOPS = 339,            /* K_SYNCHLOOPS  */
    K_BYTEDELAY = 340,             /* K_BYTEDELAY  */
    K_POLLVALUE = 341,             /* K_POLLVALUE  */
    K_POLLINDEX = 342,             /* K_POLLINDEX  */
    K_PREDELAY = 343,              /* K_PREDELAY  */
    K_POSTDELAY = 344,             /* K_POSTDELAY  */
    K_POLLMETHOD = 345,            /* K_POLLMETHOD  */
    K_MODE = 346,                  /* K_MODE  */
    K_DELAY = 347,                 /* K_DELAY  */
    K_BLOCKSIZE = 348,             /* K_BLOCKSIZE  */
    K_READSIZE = 349,              /* K_READSIZE  */
    K_HVENTERSTABDELAY = 350,      /* K_HVENTERSTABDELAY  */
    K_PROGMODEDELAY = 351,         /* K_PROGMODEDELAY  */
    K_LATCHCYCLES = 352,           /* K_LATCHCYCLES  */
    K_TOGGLEVTG = 353,             /* K_TOGGLEVTG  */
    K_POWEROFFDELAY = 354,         /* K_POWEROFFDELAY  */
    K_RESETDELAYMS = 355,          /* K_RESETDELAYMS  */
    K_RESETDELAYUS = 356,          /* K_RESETDELAYUS  */
    K_HVLEAVESTABDELAY = 357,      /* K_HVLEAVESTABDELAY  */
    K_RESETDELAY = 358,            /* K_RESETDELAY  */
    K_SYNCHCYCLES = 359,           /* K_SYNCHCYCLES  */
    K_HVCMDEXEDELAY = 360,         /* K_HVCMDEXEDELAY  */
    K_CHIPERASEPULSEWIDTH = 361,   /* K_CHIPERASEPULSEWIDTH  */
    K_CHIPERASEPOLLTIMEOUT = 362,  /* K_CHIPERASEPOLLTIMEOUT  */
    K_CHIPERASETIME = 363,         /* K_CHIPERASETIME  */
    K_PROGRAMFUSEPULSEWIDTH = 364, /* K_PROGRAMFUSEPULSEWIDTH  */
    K_PROGRAMFUSEPOLLTIMEOUT = 365, /* K_PROGRAMFUSEPOLLTIMEOUT  */
    K_PROGRAMLOCKPULSEWIDTH = 366, /* K_PROGRAMLOCKPULSEWIDTH  */
    K_PROGRAMLOCKPOLLTIMEOUT = 367, /* K_PROGRAMLOCKPOLLTIMEOUT  */
    K_PP_CONTROLSTACK = 368,       /* K_PP_CONTROLSTACK  */
    K_HVSP_CONTROLSTACK = 369,     /* K_HVSP_CONTROLSTACK  */
    K_ALLOWFULLPAGEBITSTREAM = 370, /* K_ALLOWFULLPAGEBITSTREAM  */
    K_ENABLEPAGEPROGRAMMING = 371, /* K_ENABLEPAGEPROGRAMMING  */
    K_HAS_JTAG = 372,              /* K_HAS_JTAG  */
    K_HAS_DW = 373,                /* K_HAS_DW  */
    K_HAS_PDI = 374,               /* K_HAS_PDI  */
    K_HAS_UPDI = 375,              /* K_HAS_UPDI  */
    K_HAS_TPI = 376,               /* K_HAS_TPI  */
    K_IDR = 377,                   /* K_IDR  */
    K_IS_AT90S1200 = 378,          /* K_IS_AT90S1200  */
    K_IS_AVR32 = 379,              /* K_IS_AVR32  */
    K_RAMPZ = 380,                 /* K_RAMPZ  */
    K_SPMCR = 381,                 /* K_SPMCR  */
    K_EECR = 382,                  /* K_EECR  */
    K_FLASH_INSTR = 383,           /* K_FLASH_INSTR  */
    K_EEPROM_INSTR = 384,          /* K_EEPROM_INSTR  */
    TKN_COMMA = 385,               /* TKN_COMMA  */
    TKN_EQUAL = 386,               /* TKN_EQUAL  */
    TKN_SEMI = 387,                /* TKN_SEMI  */
    TKN_TILDE = 388,               /* TKN_TILDE  */
    TKN_LEFT_PAREN = 389,          /* TKN_LEFT_PAREN  */
    TKN_RIGHT_PAREN = 390,         /* TKN_RIGHT_PAREN  */
    TKN_NUMBER = 391,              /* TKN_NUMBER  */
    TKN_NUMBER_REAL = 392,         /* TKN_NUMBER_REAL  */
    TKN_STRING = 393               /* TKN_STRING  */
  };
  typedef enum yytokentype yytoken_kind_t;
#endif

/* Value type.  */
#if ! defined YYSTYPE && ! defined YYSTYPE_IS_DECLARED
typedef int YYSTYPE;
# define YYSTYPE_IS_TRIVIAL 1
# define YYSTYPE_IS_DECLARED 1
#endif


extern YYSTYPE yylval;

int yyparse (void);

#endif /* !YY_YY_CONFIG_GRAM_H_INCLUDED  */
