package com.atlassian.tutorial.myPlugin;
import com.atlassian.jira.plugin.webfragment.contextproviders.AbstractJiraContextProvider;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Stream;
import com.atlassian.jira.plugin.webfragment.model.JiraHelper;
import com.atlassian.jira.user.ApplicationUser;
import com.sun.org.apache.bcel.internal.generic.ARETURN;
import com.sun.org.apache.bcel.internal.generic.DRETURN;

public class getissue extends AbstractJiraContextProvider  {


        @Override
        public Map getContextMap(ApplicationUser applicationUser, JiraHelper jiraHelper) {
                Map<String, Object> contextMap = new HashMap<>();
                contextMap.put("key","button");
                return contextMap;
        }

    }


