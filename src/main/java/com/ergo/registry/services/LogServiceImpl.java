package com.ergo.registry.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.logging.*;

@Service
public class LogServiceImpl implements LogService {
    @Autowired
    protected static final Logger logger = Logger.getGlobal();

    public static void log() throws Exception {
        Handler fileHandler = new FileHandler();
        fileHandler.setFormatter(new logFormatter());
        logger.setUseParentHandlers(false);
        logger.addHandler(fileHandler);
    }

    static class logFormatter extends Formatter {
    @Override
        public String format(LogRecord record) {
            return record.getLevel() + ": " + record.getMessage();
        }
    }
}